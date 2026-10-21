const fs = require('fs');
const { resolve } = require('path');

const { readFile, writeFile } = fs.promises;

async function main() {
  const version = process.argv[2];

  if (!['10', '11', '12', '13'].includes(version)) {
    throw new Error(`Unsupported Angular version: ${version || '(missing)'}`);
  }

  const root = process.cwd();
  const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));
  const writeJson = async (path, value) =>
    writeFile(path, `${JSON.stringify(value, null, 2)}\n`);

  const packagePath = resolve(root, 'package.json');
  const versionPackagePath = resolve(
    root,
    'angular-version-package',
    `package-${version}.json`,
  );
  const libraryPackagePath = resolve(
    root,
    'projects',
    'ng-swiper-element',
    'package.json',
  );
  const tsconfigPath = resolve(root, 'tsconfig.json');
  const storybookDirectory = resolve(
    root,
    'projects',
    'ng-swiper-element',
    '.storybook',
  );
  const managerPath = resolve(storybookDirectory, 'manager.ts');
  const managerVariantPath = resolve(
    storybookDirectory,
    `manager-${Number(version) <= 11 ? 'legacy' : 'modern'}.ts`,
  );
  // const storybookPath = resolve(
  //   root,
  //   'projects',
  //   'ng-swiper-element',
  //   '.storybook',
  // );
  // const previewVariant = version === '18' ? '18' : version === '19' ? '19' : '20';

  const [packageJson, versionPackage, libraryPackage, tsconfig, managerConfig] =
    await Promise.all([
    readJson(packagePath),
    readJson(versionPackagePath),
    readJson(libraryPackagePath),
    readJson(tsconfigPath),
    readFile(managerVariantPath, 'utf8'),
  ]);

  if (!versionPackage.dependencies || !versionPackage.devDependencies) {
    throw new Error(`package-${version}.json must define dependencies and devDependencies`);
  }

  if (typeof versionPackage.version !== 'string' || !versionPackage.version) {
    throw new Error(`package-${version}.json must define a version`);
  }

  packageJson.version = versionPackage.version;
  libraryPackage.version = versionPackage.version;
  packageJson.dependencies = versionPackage.dependencies;
  packageJson.devDependencies = versionPackage.devDependencies;
  packageJson.overrides = versionPackage.overrides;

  for (const dependency of ['@angular/common', '@angular/core']) {
    const versionValue = packageJson.dependencies[dependency];
    if (!versionValue) {
      throw new Error(`package-${version}.json is missing ${dependency}`);
    }

    // ensure that even if angular version is 21.2.2, the peer dependency is set to ^21.0.0
    const normalizedVersion = versionValue.replace(/(\d+)\.(\d+)\.(\d+)/, '$1.0.0');
    libraryPackage.peerDependencies[dependency] = normalizedVersion;
  }

  const tslibVersion = packageJson.dependencies.tslib;
  const swiperVersion = packageJson.dependencies.swiper;
  if (!tslibVersion) {
    throw new Error(`package-${version}.json is missing tslib`);
  }
  libraryPackage.dependencies.tslib = tslibVersion;

  if (swiperVersion) {
    libraryPackage.peerDependencies.swiper = swiperVersion;
    libraryPackage.devDependencies.swiper = swiperVersion;
  }

  if (Number(version) <= 11) {
    delete tsconfig.compilerOptions.noImplicitOverride;
    delete tsconfig.compilerOptions.noPropertyAccessFromIndexSignature;
  } else {
    tsconfig.compilerOptions.noImplicitOverride = true;
    tsconfig.compilerOptions.noPropertyAccessFromIndexSignature = true;
  }

  await Promise.all([
    writeJson(packagePath, packageJson),
    writeJson(libraryPackagePath, libraryPackage),
    writeJson(tsconfigPath, tsconfig),
    writeFile(managerPath, managerConfig),
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
