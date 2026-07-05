/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — `next build` emits an `out/` folder that can be hosted
  // anywhere (Vercel auto-detects this). No server or database in Phase 1.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
