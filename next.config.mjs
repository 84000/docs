//@ts-check

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import nextra from 'nextra';

const rootDir = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  outputFileTracingRoot: rootDir,
  turbopack: {
    root: rootDir,
  },
};

const withNextra = nextra({});

export default withNextra(nextConfig);
