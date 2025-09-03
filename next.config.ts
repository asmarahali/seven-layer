import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "seven-layer"; // your repo name

const nextConfig: NextConfig = {
  output: "export", // enables static export for GitHub Pages
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  // trailingSlash: true, // uncomment if deep-link pages (like /about) give 404
};

export default nextConfig;
