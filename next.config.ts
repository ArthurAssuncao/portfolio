import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL("https://placehold.co/**"),
      new URL("https://github.com/**"),
    ],
    domains: ["placehold.co", "github.com"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
