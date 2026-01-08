// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {}, // 🔥 enable Turbopack
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
