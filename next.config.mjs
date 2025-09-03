/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/futuro-corp-website',
  assetPrefix: '/futuro-corp-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;