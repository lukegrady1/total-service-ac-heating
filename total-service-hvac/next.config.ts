import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/total-service-ac-heating" : "",
  assetPrefix: isProd ? "/total-service-ac-heating" : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/total-service-ac-heating" : "",
  },
};

export default nextConfig;
