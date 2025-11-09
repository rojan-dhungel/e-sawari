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


// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   reactStrictMode: true,   // keep strict mode
//   output: 'export',        // ✅ enable static export
//   distDir: 'out',          // ✅ set output folder for static files
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
//   typescript: {
//     ignoreBuildErrors: false,
//   },
//   images: {
//     unoptimized: true,     // required for static export
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
  // ✅ Keep React strict mode for debugging & consistency
  reactStrictMode: true,

  // ✅ Enable static site generation (Next.js Export)
  output: 'export',

  // ✅ Output folder for static build
  distDir: 'out',

  // ✅ Allow using both "src/pages" and "app" directories
  experimental: {
    appDir: true, // Enables App Router for your static admin panel
  },

  // ✅ Linting and TypeScript checks
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // ✅ Image optimization settings (required for `next export`)
  images: {
    unoptimized: true, // Must be true for static export
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

  // ✅ Optimize Webpack for static export + disable caching in dev
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
