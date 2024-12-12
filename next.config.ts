import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, context) => {
    // Enable polling based on env variable being set
    if(process.env.USE_POLLING) {
      config.watchOptions = {
        poll: 500,
        aggregateTimeout: 300
      }
    }
    return config
  },
};

export default nextConfig;
