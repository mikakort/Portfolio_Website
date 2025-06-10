/** @type {import('next').NextConfig} */
const repo = 'Portfolio_Website';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;
const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
