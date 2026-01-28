/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', 
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "blob.v0.dev" },
      { protocol: "https", hostname: "placeholder.svg" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
    ],
  },
};

export default nextConfig;
