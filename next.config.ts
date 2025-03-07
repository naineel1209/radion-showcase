import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ["src"],
  },
  images: {
    remotePatterns: [
      {
        port: '',
        hostname: 'framerusercontent.com',
      }
    ]
  }
};

export default nextConfig;
