/**
 * Fully static site — `next build` emits an `out/` folder that can be hosted
 * anywhere (Vercel auto-detects this). No server or database in Phase 1.
 *
 * On GitHub Pages the site lives under a repo subpath (…/aerial/), so we set a
 * base path only in that build (GITHUB_PAGES=true, set by the deploy workflow).
 * Local dev and Vercel (served at the domain root) are unaffected.
 */
const isPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isPages ? { basePath: "/aerial", assetPrefix: "/aerial/" } : {}),
};

export default nextConfig;
