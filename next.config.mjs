import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  async redirects() {
    return [
      {
        source: '/products/iptv-encoders/',
        destination: '/products/iptv-encoder/',
        permanent: true,
      },
      {
        source: '/products/hdmi-encoder-iptv/',
        destination: '/products/hdmi-encoder-for-iptv/',
        permanent: true,
      },
      {
        source: '/products/4k-hdmi-iptv-encoder/',
        destination: '/products/4k-iptv-encoder/',
        permanent: true,
      },
      {
        source: '/products/failed-to-authorize-iptv-smarters/',
        destination: '/products/iptv-smarters-failed-to-authorize/',
        permanent: true,
      },
      {
        source: '/products/iptv-services/',
        destination: '/iptv-services/',
        permanent: true,
      },
      {
        source: '/products/iptv-org-2/',
        destination: '/products/iptv-org/',
        permanent: true,
      },
      {
        source: '/itemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
};

export default nextConfig;
