//@ts-check

import nextra from 'nextra';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/docs' : undefined,
};

const withNextra = nextra({
  contentDirBasePath:
    process.env.NODE_ENV === 'production' ? '/docs' : undefined,
});

export default withNextra(nextConfig);
