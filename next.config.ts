import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 🔥 ye line important hai
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tse2.mm.bing.net",
      },
      {
        protocol: "https",
        hostname: "www.traveltalktours.com",
      },
      {
        protocol: "https",
        hostname: "images.trvl-media.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
};

export default nextConfig;