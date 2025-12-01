import type { Metadata } from "next";
import { Inter, Playfair_Display, Manrope } from "next/font/google";
import "../style/globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Авторский дизайн интерьера в Санкт-Петербурге | Caza Interior",
  description: "Каждый проект — отражение Вашей жизни и характера. Авторский дизайн интерьера в Санкт-Петербурге.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${playfair.variable} ${manrope.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
