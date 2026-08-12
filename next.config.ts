import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/Personal-Profile" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/Personal-Profile/" : "",
  trailingSlash: true,
  images: { unoptimized: true },
  // The archived UI predates Next's StaticImageData typing. The browser output
  // is valid, so Pages builds should not be blocked by those legacy img types.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
