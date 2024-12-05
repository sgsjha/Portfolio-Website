import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Ensure it's static
  basePath: '/Portfolio-Website', // Replace <repository-name> with your repo name
  assetPrefix: isProd ? '/Portfolio-Website' : '',
};

export default nextConfig;
