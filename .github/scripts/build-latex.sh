#!/usr/bin/env bash
set -euxo pipefail

if command -v apt-get >/dev/null 2>&1; then
  apt-get update
  apt-get install -y --no-install-recommends poppler-utils
elif command -v apk >/dev/null 2>&1; then
  apk add --no-cache poppler-utils
fi

ROOT="$GITHUB_WORKSPACE"
TMPROOT="${RUNNER_TEMP:-/tmp}/lwarp-build"
PUBLIC="$ROOT/public"

mkdir -p "$PUBLIC"
cd "$ROOT"

if ! find content -type f -name '*.tex' -print -quit | grep -q .; then
  echo "Error: No .tex files found in content directory"
  exit 1
fi

find content -type f -name '*.tex' -print0 | \
  while IFS= read -r -d '' tex; do
    src_dir="$(dirname "$tex")"
    base="$(basename "$tex" .tex)"
    
    jobdir="$TMPROOT/$src_dir"
    mkdir -p "$jobdir"
    
    echo "Processing $tex in $jobdir"
    
    cp "$ROOT/$tex" "$jobdir/"
    cd "$jobdir"
    
    pdflatex -interaction=nonstopmode -halt-on-error "$base.tex"
    lwarpmk html -p "$base"
    
    # Clean up intermediate files
    # This is mandatory to avoid duplicate HTML files
    # (one with suffix {doc_name}_html.html and one without {doc_name}.html)
    lwarpmk clean -p "$base" || true
    
    # Copy HTML files to public directory
    public_dir="$PUBLIC/$src_dir"
    mkdir -p "$public_dir"
    find . -maxdepth 1 -type f -name '*.html' -exec cp {} "$public_dir/" \;
  done

echo "HTML generation complete. Files are in $PUBLIC"