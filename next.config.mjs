/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.freepik.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "www.foodiesfeed.com",
      },
    ],
  },
};

export default nextConfig;
