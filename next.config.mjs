/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.logoai.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "www.foodiesfeed.com",
      },
      {
        hostname: "drive.usercontent.google.com",
      },
      {
        hostname: "i.postimg.cc",
      },
    ],
  },
};

export default nextConfig;
