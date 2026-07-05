import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e5ff",
          200: "#bcd0ff",
          300: "#8eb1ff",
          400: "#5987fb",
          500: "#3563f3",
          600: "#1f45e6",
          700: "#1836c9",
          800: "#1a30a2",
          900: "#1b2f80",
        },
      },
      fontFamily: {
        sans: [
          '"PingFang TC"',
          '"Noto Sans TC"',
          '"Microsoft JhengHei"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
