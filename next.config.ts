import type { NextConfig } from "next";

// Error: Invalid src prop (https://placehold.co/400x600?text=The+Shawshank+Redemption) on `next/image`, hostname "placehold.co" is not configured under images in your `next.config.js`

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
