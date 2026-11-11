# Resume

## Build
```
podman run --rm -v "$(pwd):/workdir" -w /workdir texlive/texlive:latest latexmk -xelatex -outdir=output resume.tex
```
