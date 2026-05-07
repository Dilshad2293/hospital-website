import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isVercel = process.env.VERCEL === "1";
const repoName = "medcore-premium-hospital";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd && !isVercel ? `/${repoName}` : "",
  assetPrefix: isProd && !isVercel ? `/${repoName}/` : "",
};

export default nextConfig;
