import { spawnSync } from 'node:child_process';
import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const [angularVersion, patchOption, tag, ...extraArgs] = process.argv.slice(2);
const patchOptionChecked = patchOption?.toLowerCase() === 'yes' || patchOption?.toLowerCase() === 'no' ? patchOption.toLowerCase() : 'no';
const supportedVersions = ['18', '19', '20', '21', '22'];
const tagChecked = tag || 'latest';
if (
  extraArgs.length > 0 ||
  !supportedVersions.includes(angularVersion) ||
  !['yes', 'no'].includes((patchOptionChecked)?.toLowerCase())
) {
  throw new Error(
    'Usage: node scripts/publish-angular.mjs <18|19|20|21|22> <yes|no>',
  );
}

const shouldPatch = patchOptionChecked.toLowerCase() === 'yes';
const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));

function runNpm(args, cwd = root) {
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const result = spawnSync(command, args, {
    cwd,
    shell: process.platform === 'win32',
    stdio: 'inherit',
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(
      `${command} ${args.join(' ')} failed with status ${result.status}`,
    );
  }
}

const useAngularVersionScript = resolve(
  root,
  'scripts',
  'use-angular-version.mjs',
);
const useAngularVersion = spawnSync(
  process.execPath,
  [useAngularVersionScript, angularVersion],
  { cwd: root, stdio: 'inherit' },
);
if (useAngularVersion.error) {
  throw useAngularVersion.error;
}
if (useAngularVersion.status !== 0) {
  throw new Error(`Failed to select Angular ${angularVersion}`);
}

if (shouldPatch) {
  runNpm(['run', 'patch', '--no-git-tag-version']);

  const libraryPackagePath = resolve(
    root,
    'projects',
    'ng-swiper-element',
    'package.json',
  );
  const versionPackagePath = resolve(
    root,
    'angular-version-package',
    `package-${angularVersion}.json`,
  );
  const [libraryPackage, versionPackage] = await Promise.all([
    readJson(libraryPackagePath),
    readJson(versionPackagePath),
  ]);
  versionPackage.version = libraryPackage.version;
  await writeFile(
    versionPackagePath,
    `${JSON.stringify(versionPackage, null, 2)}\n`,
  );
}

runNpm(['install', '--no-package-lock']);
runNpm(['run', 'build', '--', 'ng-swiper-element']);

const outputDirectory = resolve(root, 'dist', 'ng-swiper-element');
await Promise.all([
  copyFile(
    resolve(root, 'projects', 'ng-swiper-element', 'README.md'),
    resolve(outputDirectory, 'README.md'),
  ),
  copyFile(resolve(root, 'LICENSE'), resolve(outputDirectory, 'LICENSE')),
]);
runNpm(['publish', '--tag', `v${tagChecked}`], outputDirectory);
