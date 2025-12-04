#!/usr/bin/env bash
set -euxo pipefail

# Install dependencies
if command -v apt-get >/dev/null 2>&1; then
  apt-get update
  apt-get install -y --no-install-recommends poppler-utils
elif command -v apk >/dev/null 2>&1; then
  apk add --no-cache poppler-utils
fi

# Setup directories
ROOT="$GITHUB_WORKSPACE"
TMPROOT="${RUNNER_TEMP:-/tmp}/latex-build"
PUBLIC="$ROOT/public"

mkdir -p "$PUBLIC"
cd "$ROOT"

# Check for .tex files
if ! find content -type f -name '*.tex' -print -quit | grep -q .; then
  echo "Error: No .tex files found in content directory"
  exit 1
fi

# Process each .tex file
find content -type f -name '*.tex' -print0 | \
  while IFS= read -r -d '' tex; do
    src_dir="$(dirname "$tex")"
    base="$(basename "$tex" .tex)"
    
    jobdir="$TMPROOT/$src_dir"
    mkdir -p "$jobdir"
    
    echo "Processing $tex in $jobdir"
    
    # Copy all files from source directory (for includes, images, etc.)
    cp -a "$ROOT/$src_dir"/. "$jobdir"/
    cd "$jobdir"
    
    # Convert to HTML using make4ht
    make4ht -u "$base.tex" "mathjax"
    
    # Copy HTML files to public directory
    public_dir="$PUBLIC/$src_dir"
    mkdir -p "$public_dir"
    find . -maxdepth 1 \( -name '*.html' -o -name '*.css' \) -exec cp {} "$public_dir/" \;
    
    # Clean up temp directory
    cd "$ROOT"
    rm -rf "$jobdir"
  done

echo "HTML generation complete. Files are in $PUBLIC"