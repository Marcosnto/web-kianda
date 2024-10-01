/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "tns-back.local",
        port: "",
      },
    ],
  },
};

export default nextConfig;
