# jgard

## Build and check the PWA

Production builds are written to `docs/`.

```sh
npm run build
npm run preview -- --host 0.0.0.0 --port 4173
```

Or build and preview in Docker:

```sh
podman build -t jgard .
podman run --rm --userns=keep-id -v "$PWD:/app" -v /app/node_modules jgard npm run build
podman run --rm -p 4173:4173 -v "$PWD:/app" -v /app/node_modules jgard npm run preview -- --host 0.0.0.0 --port 4173
```
