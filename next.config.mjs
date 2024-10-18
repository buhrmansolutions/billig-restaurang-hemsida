/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "png.pngtree.com",
      },
    ],
  },
};

export default nextConfig;
