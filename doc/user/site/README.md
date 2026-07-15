# markdown-query docs site

The [markdown-query](https://github.com/NutshellEngineering/markdown-query) documentation site (for the `mq` CLI), built with [Docusaurus](https://docusaurus.io/). Content lives under `../doc/user/`, not the Docusaurus default `docs/`.

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Deployment to GitHub Pages is automated via `.github/workflows/deploy-docs.yml`: pushes to `main` that touch `website/**` or `doc/user/**` trigger a build and publish through GitHub Actions (no `gh-pages` branch or manual `npm run deploy` needed).
