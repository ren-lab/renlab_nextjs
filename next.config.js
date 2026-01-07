/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For static export, we need to disable image optimization
  // basePath: '/out',
  assetPrefix: '/out/',
}

module.exports = nextConfig

