- Name of TeX document cannot contain a space or special characters.

index.tex documents are special and used at special places.
- /content/index.tex for home page
- /content/ongoing/index.tex for introduction to ongoing research 
- /content/publications/index.tex for introduction to publications


- beware of internal linkings
- only first paragraph of the first abstract is used for display

- a document is "published" if it is directly the child of 
    - "ongoing/" 
    - "publications/" 
    - or it is the /index.html  itself.
    - Document outside of these folders are considered private.

- some latex commands are not supported mathjax for example `\vline`