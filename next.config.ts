import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/seven-layer',
  assetPrefix: '/seven-layer/',
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig