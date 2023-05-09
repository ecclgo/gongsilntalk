const withImages = require('next-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['m.post.naver.com', 'm.blog.naver.com', 'i2.ruliweb.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.post.naver.com'
      }
    ]
  },
  reactStrictMode: true
};

module.exports = nextConfig