/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/seven-layer',
  assetPrefix: '/seven-layer/',
}

module.exports = nextConfig