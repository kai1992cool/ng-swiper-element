#!/usr/bin/env bash
set -Eeuo pipefail

die() {
  printf 'Error: %s\n' "$*" >&2
  exit 1
}

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(git -C "$script_dir" rev-parse --show-toplevel)" ||
  die "Could not locate the Git repository."
branch="$(git -C "$repo_root" branch --show-current)"

case "$branch" in
  release/angular-17) version=17; expected_node='v20.19.' ;;
  release/angular-18) version=18; expected_node='v20.19.' ;;
  release/angular-19) version=19; expected_node='v20.19.' ;;
  release/angular-20) version=20; expected_node='v22.22.' ;;
  release/angular-21) version=21; expected_node='v22.22.' ;;
  release/angular-22) version=22; expected_node='v22.22.' ;;
  *) die "Unsupported deployment branch: ${branch:-detached HEAD}" ;;
esac

for command_name in git node npm; do
  command -v "$command_name" >/dev/null 2>&1 ||
    die "Required command not found: $command_name"
done

node_version="$(node --version)"
[[ "$node_version" == "$expected_node"* ]] ||
  die "Branch $branch requires Node.js ${expected_node#v}x (workflow uses $expected_node*); found $node_version."

git -C "$repo_root" remote get-url origin >/dev/null 2>&1 ||
  die "A Git remote named 'origin' is required for deployment."

printf 'Installing dependencies...\n'
(
  cd "$repo_root"
  npm ci
  npx ng build ng-swiper-element
  npm run build-storybook
)

storybook_dir="$repo_root/storybook-static"
selector_file="$repo_root/.github/pages/index.html"
[[ -d "$storybook_dir" ]] || die "Storybook output not found: $storybook_dir"
[[ -f "$selector_file" ]] || die "Version selector not found: $selector_file"

remote_branch="$(git -C "$repo_root" ls-remote --heads origin refs/heads/gh-pages)" ||
  die "Could not read origin/gh-pages. Check your network and Git credentials."

temp_root="$(mktemp -d "${TMPDIR:-/tmp}/ng-swiper-pages.XXXXXX")"
publish_worktree="$temp_root/publish"
created_publish_branch=''

cleanup() {
  if [[ -n "${publish_worktree:-}" && -d "$publish_worktree" ]]; then
    git -C "$repo_root" worktree remove --force "$publish_worktree" >/dev/null 2>&1 || true
  fi
  if [[ -n "${created_publish_branch:-}" ]]; then
    git -C "$repo_root" branch -D "$created_publish_branch" >/dev/null 2>&1 || true
  fi
  if [[ -n "${temp_root:-}" && -d "$temp_root" ]]; then
    rmdir "$temp_root" 2>/dev/null || true
  fi
}
trap cleanup EXIT

if [[ -n "$remote_branch" ]]; then
  printf 'Fetching existing gh-pages branch...\n'
  git -C "$repo_root" fetch origin gh-pages
  git -C "$repo_root" worktree add --detach "$publish_worktree" FETCH_HEAD
else
  printf 'Creating gh-pages branch for its first deployment...\n'
  git -C "$repo_root" worktree add --detach "$publish_worktree" HEAD
  created_publish_branch="local-gh-pages-publish-$$"
  git -C "$publish_worktree" switch --orphan "$created_publish_branch"
  git -C "$publish_worktree" rm -rf --ignore-unmatch . >/dev/null
fi

mkdir -p "$publish_worktree/v$version"
cp -a "$storybook_dir/." "$publish_worktree/v$version/"
cp "$selector_file" "$publish_worktree/index.html"

git -C "$publish_worktree" add -A
if git -C "$publish_worktree" diff --cached --quiet; then
  printf 'No published files changed; skipping deployment commit.\n'
else
  git -C "$publish_worktree" \
    -c user.name="github-actions[bot]" \
    -c user.email="41898282+github-actions[bot]@users.noreply.github.com" \
    commit -m "Deploy Storybook for Angular $version"
  git -C "$publish_worktree" push origin HEAD:refs/heads/gh-pages
fi

printf 'Storybook v%s deployed to origin/gh-pages.\n' "$version"
