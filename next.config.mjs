/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
