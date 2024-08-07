/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "res.cloudinary.com",
        "picsum.photos",
        "via.placeholder.com",
        "unsplash.com",
        "cdn.sanity.io",
      ],
    },
  };
  
  module.exports = nextConfig;