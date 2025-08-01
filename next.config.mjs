import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/zabor-belgorod',
  assetPrefix: '/zabor-belgorod/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(path.dirname('.'), 'src');
    return config;
  },
};

export default nextConfig;
