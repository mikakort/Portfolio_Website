const repo = 'Portfolio_Website';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
