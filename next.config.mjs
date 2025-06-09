const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? 'https://mikaelkortbaoui.dev' : undefined, // ✅ changed
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
