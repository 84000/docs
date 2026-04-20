# Documentation App

This is a [Nextra](https://nextra.site/) web application for hosting internal documentation
for our tools.

## Getting Started

First, install dependencies and then run the site locally.

```bash
npm install
npm run dev
```

## Writing Documentation

All markdown content should go in the `src/content` directory. This directory
is automatically scanned by Nextra and will be added to the website. Pages should
have a `.mdx` extension. Documentation can be nested in subdirectories, and the
structure will be reflected in the navigation of the site.

See the [Nextra documentation](https://nextra.site/docs/guide/markdown) for more
information.