import type { Config } from "tailwindcss";

/**
 * 「霧藍天空」莫蘭迪色系 —— 低飽和、加灰的溫柔天空調。
 * brand = 天空藍(主色)、sage = 灰綠(標示最佳)、rose = 淡玫瑰(舞綢)、ochre = 灰芥黃(評分)。
 * 中性色用 Tailwind 內建的冷灰 `slate`。
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4fa",
          100: "#d9e8f3",
          200: "#b7d2e6",
          300: "#8ab4d6",
          400: "#5f95bf",
          500: "#487ca4",
          600: "#3e6d92",
          700: "#345b79",
          800: "#2e4d64",
          900: "#294153",
        },
        sage: {
          50: "#eaf3ef",
          100: "#d5e8e0",
          200: "#b5d5c9",
          300: "#8dbcac",
          400: "#66a08d",
          500: "#4f8877",
          600: "#427163",
          700: "#385d52",
          800: "#304b44",
          900: "#293e39",
        },
        rose: {
          50: "#f8f1f2",
          100: "#efdde0",
          200: "#e2c5ca",
          300: "#cfa3ab",
          400: "#b98089",
          500: "#a4666f",
          600: "#8c545d",
          700: "#71454c",
          800: "#5d3a40",
          900: "#4e3236",
        },
        ochre: {
          50: "#f7f2e9",
          100: "#eee3cf",
          200: "#e0cca8",
          300: "#cfb07d",
          400: "#c09a5f",
          500: "#a9834a",
          600: "#8c6b3c",
          700: "#6f5531",
          800: "#5b4629",
          900: "#4c3a24",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          '"Noto Sans CJK TC"',
          '"PingFang TC"',
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
