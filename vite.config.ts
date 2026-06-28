import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Minimal typing for the Node env var read below (avoids a full @types/node dep).
declare const process: { env: Record<string, string | undefined> };

// https://vite.dev/config/
// `base` defaults to "/" (root deploys: local, Vercel, Netlify). The GitHub
// Pages workflow sets VITE_BASE="/aerial/" so assets resolve under the project
// subpath. import.meta.env.BASE_URL reflects this and drives the router basename.
export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
