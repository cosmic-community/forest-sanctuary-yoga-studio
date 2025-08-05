/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.cosmicjs.com', 'imgix.cosmicjs.com'],
  },
  experimental: {
    appDir: true,
  },
  // Disable typedRoutes to prevent complex TypeScript errors
  typedRoutes: false,
}

module.exports = nextConfig