"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import ProductCard from "@/components/ProductCard";
import { CartProvider } from "@/context/CartContext";
import { products, scentCategories } from "@/data/products";

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "new":
          return (b.new ? 1 : 0) - (a.new ? 1 : 0);
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Header />
      <CartSidebar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#E8E0D5] to-[#F5F1EB]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl md:text-5xl text-[#2D2A26] mb-4"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              商品一覧
            </h1>
            <p className="text-[#8B8178]">
              すべてのキャンドルは、一つひとつ手作りで仕上げています
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-[#F5F1EB]/95 backdrop-blur-sm border-b border-[#E8E0D5]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {scentCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm tracking-wider transition-colors ${
                    activeCategory === category.id
                      ? "bg-[#2D2A26] text-[#F5F1EB]"
                      : "bg-transparent text-[#8B8178] hover:text-[#2D2A26]"
                  }`}
                >
                  {category.nameJa}
                </motion.button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-[#8B8178]">並び替え</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-[#E8E0D5] px-3 py-2 text-sm text-[#2D2A26] focus:outline-none focus:border-[#C4956A]"
              >
                <option value="featured">おすすめ</option>
                <option value="new">新着順</option>
                <option value="price-low">価格が低い順</option>
                <option value="price-high">価格が高い順</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-[#8B8178] mb-8"
          >
            {filteredProducts.length}件の商品
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + sortBy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-[#8B8178]">
                このカテゴリの商品はまだありません
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16 px-6 bg-[#E8E0D5]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-sm tracking-[0.3em] text-[#C4956A] mb-4"
            >
              CANDLE CARE
            </h2>
            <p
              className="text-2xl text-[#2D2A26]"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              キャンドルのお手入れ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "初めて火をつけるとき",
                description:
                  "表面全体が溶けるまで（約2-3時間）灯してください。均等に燃えるようになります。",
              },
              {
                title: "芯のお手入れ",
                description:
                  "毎回点火前に芯を5mmほどにカットしてください。煙を抑え、均一な炎が保てます。",
              },
              {
                title: "保管方法",
                description:
                  "直射日光を避け、涼しい場所で保管してください。香りが長持ちします。",
              },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 text-[#C4956A]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.2" />
                    <text
                      x="12"
                      y="16"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#C4956A"
                    >
                      {index + 1}
                    </text>
                  </svg>
                </div>
                <h3
                  className="text-lg text-[#2D2A26] mb-2"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {tip.title}
                </h3>
                <p className="text-sm text-[#8B8178] leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Products() {
  return (
    <CartProvider>
      <ProductsPage />
    </CartProvider>
  );
}
