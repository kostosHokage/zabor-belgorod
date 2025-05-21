import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(path.dirname('.'), 'src');
    return config;
  },
};

export default nextConfig;
