"use client";

import { Cormorant_Garamond, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <title>Akari | 灯り - Premium Candles</title>
        <meta name="description" content="手作りの香り高いキャンドルで、あなたの空間に温かな光を。Akariは日本の美意識「侘寂」を大切にしたプレミアムキャンドルブランドです。" />
        <meta name="keywords" content="キャンドル, アロマ, 香り, インテリア, ギフト, 日本製, 手作り" />
      </head>
      <body
        className={`${cormorant.variable} ${notoSansJP.variable} ${notoSerifJP.variable} antialiased`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
