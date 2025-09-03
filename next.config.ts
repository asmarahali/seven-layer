import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "seven-layer"; // your repo name

const nextConfig: NextConfig = {
  output: "export", // enables static export for GitHub Pages
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true, // uncommented to support deep-link pages on GitHub Pages
};

export default nextConfig;
