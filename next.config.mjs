/** @type {import('next').NextConfig} */

import { fileURLToPath } from "url";
import path from "path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  images: {
    domains: ["api.kiandadiversidade.com"],
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
  webpack: (config) => {
    config.resolve.alias["@components"] = path.resolve(
      __dirname,
      "src/components",
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config; // Sempre retorne o objeto `config`
  },
};

export default nextConfig;
