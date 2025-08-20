/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "seasoned.koto.studio",
      },
    ],
  },
};

export default nextConfig;
