/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['54.161.240.140', 'careassistance.com', 'careassistance.co'],
  },
  experimental: { images: { allowFutureImage: true } }

}

module.exports = nextConfig
