/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["juniorinit.cdn.prismic.io","images.prismic.io"],
  },
}

module.exports = nextConfig