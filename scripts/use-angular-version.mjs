import { readFile, writeFile } from 'node:fs/promises';
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

const [packageJson, versionPackage, libraryPackage] = await Promise.all([
  readJson(packagePath),
  readJson(versionPackagePath),
  readJson(libraryPackagePath),
]);

if (!versionPackage.dependencies || !versionPackage.devDependencies) {
  throw new Error(`package-${version}.json must define dependencies and devDependencies`);
}

packageJson.dependencies = versionPackage.dependencies;
packageJson.devDependencies = versionPackage.devDependencies;

for (const dependency of ['@angular/common', '@angular/core']) {
  const versionValue = packageJson.dependencies[dependency];
  if (!versionValue) {
    throw new Error(`package-${version}.json is missing ${dependency}`);
  }
  libraryPackage.peerDependencies[dependency] = versionValue;
}

const tslibVersion = packageJson.dependencies.tslib;
if (!tslibVersion) {
  throw new Error(`package-${version}.json is missing tslib`);
}
libraryPackage.dependencies.tslib = tslibVersion;

await Promise.all([
  writeJson(packagePath, packageJson),
  writeJson(libraryPackagePath, libraryPackage),
]);
