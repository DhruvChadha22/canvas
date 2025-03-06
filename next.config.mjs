/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "1l27wlaj8v.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery"
      },
    ],
  },
};

export default nextConfig;
