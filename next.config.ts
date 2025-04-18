import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'elevenregalos.com.ar',
        port: '',
        pathname: '/elevenWeb/app/fotos/**',
      },
    ],
  },
};

export default nextConfig;
