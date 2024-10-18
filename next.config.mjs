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
    ],
  },
};

export default nextConfig;
