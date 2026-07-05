import type { Config } from "tailwindcss";

/**
 * 莫蘭迪(Morandi)色系 —— 低飽和、加灰的溫柔色調。
 * brand = 霧玫瑰(主色)、sage = 灰綠、dust = 灰藍、ochre = 灰芥黃。
 * 中性色沿用 Tailwind 內建的暖灰 `stone`。
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
          50: "#f7f2f1",
          100: "#ece1df",
          200: "#dcc8c4",
          300: "#c8aaa4",
          400: "#b58e88",
          500: "#a2756f",
          600: "#8c5f5a",
          700: "#714b47",
          800: "#5b3c39",
          900: "#4b302e",
        },
        sage: {
          50: "#eef1ec",
          100: "#dde4d8",
          200: "#c6d0c0",
          300: "#a9b8a1",
          400: "#8ea085",
          500: "#778a6e",
          600: "#61745a",
          700: "#4e5e49",
          800: "#3f4b3b",
          900: "#354030",
        },
        dust: {
          50: "#eef1f3",
          100: "#dde4e8",
          200: "#c6d1d8",
          300: "#a6b6bf",
          400: "#869aa6",
          500: "#6f8290",
          600: "#5b6e7b",
          700: "#4b5a64",
          800: "#3f4b53",
          900: "#374149",
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
