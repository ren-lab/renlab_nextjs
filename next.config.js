/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For static export, we need to disable image optimization
  basePath: process.env.NODE_ENV === 'production' ? '/out' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/out' : '',
}

module.exports = nextConfig

