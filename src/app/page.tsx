"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Header />
      <CartSidebar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with subtle texture */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 bg-gradient-to-b from-[#E8E0D5] to-[#F5F1EB]"
        >
          {/* Floating candle decorations */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-[#C4956A]/20"
                style={{
                  left: `${15 + i * 18}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg width="60" height="90" viewBox="0 0 60 90" fill="currentColor">
                  <ellipse cx="30" cy="75" rx="20" ry="8" opacity="0.3" />
                  <rect x="15" y="30" width="30" height="50" rx="3" opacity="0.5" />
                  <ellipse cx="30" cy="15" rx="6" ry="12" />
                </svg>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1
              className="text-6xl md:text-8xl tracking-[0.3em] text-[#2D2A26] mb-2"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              AKARI
            </h1>
            <p className="text-xl md:text-2xl tracking-[0.5em] text-[#C4956A]">
              灯り
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 text-lg md:text-xl text-[#8B8178] leading-relaxed"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            あなたの空間に、温かな光を灯す
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 text-sm text-[#8B8178]/70 tracking-wider"
          >
            手作りの香り高いキャンドルで、侘寂の美を日常に
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#2D2A26] text-[#F5F1EB] text-sm tracking-[0.2em] hover:bg-[#1A1816] transition-colors"
              >
                商品を見る
              </motion.button>
            </Link>
            <Link href="/quiz">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border border-[#2D2A26] text-[#2D2A26] text-sm tracking-[0.2em] hover:bg-[#2D2A26] hover:text-[#F5F1EB] transition-colors"
              >
                香り診断
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border border-[#8B8178]/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-[#C4956A] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 bg-[#F5F1EB] wabi-texture">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-sm tracking-[0.3em] text-[#C4956A] mb-6"
            >
              OUR PHILOSOPHY
            </h2>
            <p
              className="text-2xl md:text-3xl text-[#2D2A26] leading-relaxed"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              不完全な美しさの中に、
              <br className="hidden md:block" />
              真の豊かさを見出す。
            </p>
            <p className="mt-8 text-[#8B8178] leading-loose max-w-2xl mx-auto">
              Akariは、日本古来の美意識「侘寂」を大切にしています。
              完璧を求めるのではなく、素材本来の質感や、
              炎の揺らめきがつくる影の美しさを楽しむ。
              そんな豊かな時間をお届けします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-[#E8E0D5]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-sm tracking-[0.3em] text-[#C4956A] mb-4"
            >
              FEATURED
            </h2>
            <p
              className="text-2xl text-[#2D2A26]"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              人気のキャンドル
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-[#2D2A26] text-[#2D2A26] text-sm tracking-wider hover:bg-[#2D2A26] hover:text-[#F5F1EB] transition-colors"
              >
                すべての商品を見る
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scent Quiz Banner */}
      <section className="py-24 px-6 bg-[#2D2A26] text-[#F5F1EB]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-8 text-[#C4956A]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h2
              className="text-2xl md:text-3xl mb-4"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              あなたにぴったりの香りを見つける
            </h2>
            <p className="text-[#8B8178] mb-8 max-w-xl mx-auto">
              簡単な質問に答えるだけで、あなたの気分やライフスタイルに
              合った香りをご提案します。
            </p>
            <Link href="/quiz">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#C4956A] text-[#F5F1EB] text-sm tracking-[0.2em] hover:bg-[#A67B5B] transition-colors"
              >
                香り診断を始める
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Subscription Teaser */}
      <section className="py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-sm tracking-[0.3em] text-[#C4956A] mb-4"
              >
                SUBSCRIPTION
              </h2>
              <p
                className="text-2xl md:text-3xl text-[#2D2A26] mb-6"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                毎月届く、
                <br />
                季節の灯り
              </p>
              <p className="text-[#8B8178] mb-8 leading-relaxed">
                定期便に登録すると、季節に合わせた香りのキャンドルが
                毎月届きます。限定の香りや、会員だけの特典も。
              </p>
              <Link href="/subscription">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#2D2A26] text-[#F5F1EB] text-sm tracking-wider hover:bg-[#1A1816] transition-colors"
                >
                  定期便について
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square bg-[#E8E0D5] flex items-center justify-center"
            >
              {/* Subscription illustration */}
              <div className="text-[#C4956A] candle-glow">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor">
                  {/* Box */}
                  <rect x="30" y="80" width="140" height="90" rx="4" opacity="0.2" />
                  <rect x="30" y="80" width="140" height="20" rx="2" opacity="0.3" />
                  {/* Candles in box */}
                  <rect x="50" y="60" width="25" height="40" rx="2" opacity="0.5" />
                  <ellipse cx="62" cy="50" rx="5" ry="10" />
                  <rect x="85" y="55" width="25" height="45" rx="2" opacity="0.5" />
                  <ellipse cx="97" cy="45" rx="5" ry="10" />
                  <rect x="120" y="58" width="25" height="42" rx="2" opacity="0.5" />
                  <ellipse cx="132" cy="48" rx="5" ry="10" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram / Social Proof */}
      <section className="py-16 px-6 bg-[#E8E0D5]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] text-[#8B8178] mb-8">
              @AKARI_CANDLES
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square bg-[#F5F1EB] flex items-center justify-center cursor-pointer"
                >
                  <span className="text-[#C4956A]/30 text-4xl">✦</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Home() {
  return <HomePage />;
}
