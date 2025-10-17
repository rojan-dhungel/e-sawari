// // next.config.mjs

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
//   typescript: {
//     ignoreBuildErrors: false,
//   },
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "blob.v0.dev",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "placeholder.svg",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "i.pinimg.com",
//         pathname: "/**",
//       },
//     ],
//   },
//   webpack: (config, { dev }) => {
//     if (dev) {
//       config.cache = false;
//     }
//     return config;
//   },
// };

// export default nextConfig;


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,   // keep strict mode
  output: 'export',        // ✅ enable static export
  distDir: 'out',          // ✅ set output folder for static files
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,     // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blob.v0.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placeholder.svg",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
