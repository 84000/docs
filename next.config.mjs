//@ts-check

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import nextra from 'nextra';

const rootDir = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/docs' : undefined,
  outputFileTracingRoot: rootDir,
  turbopack: {
    root: rootDir,
  },
};

const withNextra = nextra({
  contentDirBasePath:
    process.env.NODE_ENV === 'production' ? '/docs' : undefined,
});

export default withNextra(nextConfig);
