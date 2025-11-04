/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // needed for GitHub Pages
  images: { unoptimized: true }, // Next/Image on static hosts
  // Optional but often helpful on Pages for nested routes:
  // trailingSlash: true,
  // IMPORTANT: Do NOT override assetPrefix to "next".
  // Leave the default so assets live under "/_next/*"
};

export default nextConfig;
