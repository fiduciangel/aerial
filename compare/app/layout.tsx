import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "飛比空中｜台北・新北・桃園 空中運動教室比較",
    template: "%s｜飛比空中",
  },
  description:
    "飛比空中整理台北、新北、桃園的空中瑜珈、空中舞綢、空中環、空中吊床教室,提供費用、地點與捷運站的比較,幫你快速找到最適合的教室。",
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
