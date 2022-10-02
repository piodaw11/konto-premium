/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['play-lh.googleusercontent.com', 'upload.wikimedia.org', 'prywatnoscwsieci.pl'],
  }
}

module.exports = nextConfig
