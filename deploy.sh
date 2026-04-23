#!/usr/bin/env bash
# Nuke the remote and deploy this build as the only content.
# Safe to run from this directory after a fresh `npm run build`.
set -euo pipefail

REPO="TurocratesAI/turocratesai.github.com"
REMOTE="https://github.com/${REPO}.git"

here=$(cd "$(dirname "$0")" && pwd)
cd "$here"

echo "→ Rebuilding site"
npm run build

echo "→ Force-pushing source to main"
git push --force origin main

echo "→ Publishing built dist/ to gh-pages (instant live deploy)"
cd dist
# make sure CNAME is in dist so Pages keeps the custom domain
if [[ ! -f CNAME ]]; then
  echo "turocrates.ai" > CNAME
fi
# prevent Jekyll processing (so underscore paths ship as-is)
touch .nojekyll
git init -q -b gh-pages
git add -A
git -c user.email=founders@turocrates.ai -c user.name=Turocrates \
    commit -q -m "deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push --force "$REMOTE" gh-pages:gh-pages
cd ..
rm -rf dist/.git

echo "→ Deleting stale remote branches"
git push --delete origin new-site 2>/dev/null || echo "  (new-site already gone)"

echo
echo "✅ Done."
echo "   Now go to https://github.com/${REPO}/settings/pages and set:"
echo "     Source:  gh-pages branch"
echo "     Folder:  / (root)"
echo "     Custom domain: turocrates.ai"
echo
echo "   turocrates.ai will serve this site within ~1 minute."
