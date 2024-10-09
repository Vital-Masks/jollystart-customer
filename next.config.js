/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "images.saymedia-content.com",
      "e0.pxfuel.com",
      "encrypted-tbn0.gstatic.com",
      "live.staticflickr.com",
    ],
    unoptimized: true, // Disable image optimization for static export
  },
  
  output: "export", // Ensure static HTML export is enabled
};

module.exports = nextConfig;
