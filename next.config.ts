import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/Personal-Profile" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/Personal-Profile/" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
