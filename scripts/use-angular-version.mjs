import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const version = process.argv[2];

if (!['18', '19', '20', '21', '22'].includes(version)) {
  throw new Error(`Unsupported Angular version: ${version ?? '(missing)'}`);
}

const root = process.cwd();
const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));
const writeJson = async (path, value) =>
  writeFile(path, `${JSON.stringify(value, null, 2)}\n`);

const packagePath = resolve(root, 'package.json');
const angularPath = resolve(root, 'angular.json');
const postcssPath = resolve(root, 'postcss.config.json');
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
const storybookPath = resolve(
  root,
  'projects',
  'ng-swiper-element',
  '.storybook',
);
const previewVariant = version === '18' ? '18' : version === '19' ? '19' : '20';

const [packageJson, versionPackage, libraryPackage] = await Promise.all([
  readJson(packagePath),
  readJson(versionPackagePath),
  readJson(libraryPackagePath),
]);
const angularJson = await readJson(angularPath);

if (!versionPackage.dependencies || !versionPackage.devDependencies) {
  throw new Error(`package-${version}.json must define dependencies and devDependencies`);
}

const usesTailwindV3 = Number(version) <= 19;
const updateStylePaths = (value) => {
  if (Array.isArray(value)) {
    return value.map(updateStylePaths);
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, updateStylePaths(entry)]),
    );
  }
  if (
    value === 'projects/ng-swiper-element/src/styles/styles.css' ||
    value === 'projects/ng-swiper-element/src/styles/styles-tailwind3.css'
  ) {
    return usesTailwindV3
      ? 'projects/ng-swiper-element/src/styles/styles-tailwind3.css'
      : 'projects/ng-swiper-element/src/styles/styles.css';
  }
  return value;
};

packageJson.dependencies = versionPackage.dependencies;
packageJson.devDependencies = versionPackage.devDependencies;
const updatedAngularJson = updateStylePaths(angularJson);
const postcssConfig = {
  plugins: {
    [usesTailwindV3 ? 'tailwindcss' : '@tailwindcss/postcss']: {},
  },
};

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
if (!tslibVersion) {
  throw new Error(`package-${version}.json is missing tslib`);
}
libraryPackage.dependencies.tslib = tslibVersion;

const previewUpdates =
  Number(version) <= 20
    ? [
        copyFile(
          resolve(
            storybookPath,
            `preview-${previewVariant}.tsbak`,
          ),
          resolve(storybookPath, 'preview.ts'),
        ),
      ]
    : [];

await Promise.all([
  writeJson(packagePath, packageJson),
  writeJson(libraryPackagePath, libraryPackage),
  writeJson(angularPath, updatedAngularJson),
  writeJson(postcssPath, postcssConfig),
  ...previewUpdates,
]);
