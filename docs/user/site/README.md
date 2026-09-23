# markdown-query docs site

The [htee](https://github.com/mustardcustarddev/htee) documentation site (for the `ht` CLI), built with [Docusaurus](https://docusaurus.io/). Content lives under `../doc/user/`, not the Docusaurus default `docs/`.

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

Deployment to GitHub Pages is automated via `.github/workflows/deploy-site.yml`.
