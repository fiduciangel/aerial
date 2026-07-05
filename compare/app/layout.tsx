import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "北部空中運動教室比較 | 台北・新北・桃園",
    template: "%s | 北部空中運動教室比較",
  },
  description:
    "整理台北、新北、桃園的空中瑜珈、空中舞綢、空中環、空中吊床教室,提供費用、地點與捷運站的比較。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
