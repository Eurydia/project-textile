#!/usr/bin/env python3
import os
import sys
import subprocess
import shutil
from pathlib import Path

def install_dependencies():
    if shutil.which('apt-get'):
        subprocess.run(['apt-get', 'update'], check=True)
        subprocess.run(['apt-get', 'install', '-y', '--no-install-recommends', 'poppler-utils'], check=True)
    elif shutil.which('apk'):
        subprocess.run(['apk', 'add', '--no-cache', 'poppler-utils'], check=True)

def find_tex_files(content_dir: Path):
    return list(Path(content_dir).rglob('*.tex'))

def build_latex_to_html(tex_file: Path, root_dir: Path, tmproot: Path, public_dir: Path):
    """Build a single LaTeX file to HTML."""
    src_dir = tex_file.parent
    base_name = tex_file.stem
    
    # Create temp directory matching source structure
    job_dir = tmproot / src_dir.relative_to(root_dir / 'content') / tex_file.stem
    job_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"Processing {tex_file} in {job_dir}")
    
    # Copy all files from source directory
    for item in src_dir.iterdir():
        if item.is_file():
            shutil.copy2(item, job_dir)
        elif item.is_dir():
            shutil.copytree(item, job_dir / item.name, dirs_exist_ok=True)
    
    # Build PDF
    subprocess.run(
        ['pdflatex', '-interaction=nonstopmode', '-halt-on-error', f'{base_name}.tex'],
        cwd=job_dir,
        check=True
    )
    
    # Generate HTML with lwarp
    subprocess.run(
        ['lwarpmk', 'html'],
        cwd=job_dir,
        check=True
    )
    
    # Clean up intermediate files
    subprocess.run(
        ['lwarpmk', 'clean', '-p', base_name],
        cwd=job_dir,
        check=False  # Don't fail if clean fails
    )
    
    # Copy HTML files to public directory
    output_dir = public_dir / src_dir.relative_to(root_dir / 'content')
    output_dir.mkdir(parents=True, exist_ok=True)
    
    for html_file in job_dir.glob('*.html'):
        shutil.copy2(html_file, output_dir)
        print(f"Copied {html_file.name} to {output_dir}")

def main():
    # Setup directories
    root_dir = Path(os.environ.get('GITHUB_WORKSPACE', '.'))
    tmproot = Path(os.environ.get('RUNNER_TEMP', '/tmp')) / 'lwarp-build'
    public_dir = root_dir / 'public'
    content_dir = root_dir / 'content'
    
    # Install dependencies
    install_dependencies()
    
    # Create public directory
    public_dir.mkdir(exist_ok=True)
    tmproot.mkdir(parents=True, exist_ok=True)
    
    # Find all .tex files
    tex_files = find_tex_files(content_dir)
    
    if not tex_files:
        print("Error: No .tex files found in content directory")
        sys.exit(1)
    
    print(f"Found {len(tex_files)} .tex file(s)")
    
    # Process each .tex file
    for tex_file in tex_files:
        try:
            build_latex_to_html(tex_file, root_dir, tmproot, public_dir)
        except subprocess.CalledProcessError as e:
            print(f"Error processing {tex_file}: {e}")
            sys.exit(1)
    
    print(f"HTML generation complete. Files are in {public_dir}")

if __name__ == '__main__':
    main()