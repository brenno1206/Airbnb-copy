import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://web.codans.com.br/airbnb/img/icon/**')],
  },
};

export default nextConfig;
