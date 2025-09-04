import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables static export for GitHub Pages
  images: { unoptimized: true },
  trailingSlash: true, // keeps links working in GH Pages
};

export default nextConfig;
