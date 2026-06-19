/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "images.saymedia-content.com",
      "e0.pxfuel.com",
      "encrypted-tbn0.gstatic.com",
      "live.staticflickr.com",
    ],
    unoptimized: true,
  },
  output: "export",
  experimental: {
    cpus: 1,
  },
};

module.exports = nextConfig;
