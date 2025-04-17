/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/birava',
  assetPrefix: '/birava/',
  trailingSlash: true,
}

module.exports = nextConfig 