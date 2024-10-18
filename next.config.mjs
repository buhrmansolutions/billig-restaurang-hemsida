/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "png.pngtree.com",
      },
      {
        hostname: "media.istockphoto.com",
      },
      {
        hostname: "www.foodiesfeed.com",
      },
    ],
  },
};

export default nextConfig;
