import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "assets.aceternity.com" // ✅ add more domains here
    ],
  },
};

export default nextConfig;
