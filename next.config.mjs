/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: '/media/contributor/LocalDisk/elanix Scraping/Elanix',
  },
}

export default nextConfig
