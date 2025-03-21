/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'ext.same-assets.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
