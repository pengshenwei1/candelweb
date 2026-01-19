"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { useCart } from "@/context/CartContext";

function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Header />
      <CartSidebar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1
              className="text-3xl text-[#2D2A26] mb-2"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              カート
            </h1>
            <p className="text-[#8B8178]">
              {items.length > 0
                ? `${items.length}件の商品`
                : "カートは空です"}
            </p>
          </motion.div>

          {items.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex space-x-6 p-6 bg-[#E8E0D5]"
                  >
                    {/* Image Placeholder */}
                    <div className="w-24 h-24 bg-[#F5F1EB] flex-shrink-0 flex items-center justify-center">
                      <div className="text-[#C4956A]">
                        <svg width="40" height="60" viewBox="0 0 40 60" fill="currentColor">
                          <rect x="10" y="25" width="20" height="30" rx="2" opacity="0.4" />
                          <ellipse cx="20" cy="15" rx="5" ry="10" />
                        </svg>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3
                            className="text-lg text-[#2D2A26]"
                            style={{ fontFamily: "var(--font-noto-serif), serif" }}
                          >
                            {item.nameJa}
                          </h3>
                          <p className="text-xs text-[#8B8178] tracking-wider">
                            {item.name}
                          </p>
                          <p className="text-sm text-[#8B8178] mt-1">
                            {item.scent}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#8B8178] hover:text-[#2D2A26] transition-colors"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex justify-between items-end mt-4">
                        {/* Quantity */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-[#8B8178]/30 hover:border-[#C4956A] transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-[#8B8178]/30 hover:border-[#C4956A] transition-colors"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-lg text-[#C4956A]">
                          ¥{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-sm text-[#8B8178] hover:text-[#2D2A26] transition-colors"
                >
                  カートを空にする
                </button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#2D2A26] text-[#F5F1EB] p-8 sticky top-24"
                >
                  <h2
                    className="text-xl mb-6"
                    style={{ fontFamily: "var(--font-noto-serif), serif" }}
                  >
                    ご注文内容
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8B8178]">小計</span>
                      <span>¥{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8B8178]">送料</span>
                      <span>{totalPrice >= 5000 ? "無料" : "¥500"}</span>
                    </div>
                    {totalPrice < 5000 && (
                      <p className="text-xs text-[#C4956A]">
                        ¥{(5000 - totalPrice).toLocaleString()}以上のご注文で送料無料
                      </p>
                    )}
                  </div>

                  <div className="border-t border-[#8B8178]/30 pt-4 mb-6">
                    <div className="flex justify-between">
                      <span>合計</span>
                      <span className="text-xl">
                        ¥{(totalPrice + (totalPrice >= 5000 ? 0 : 500)).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-[#8B8178] mt-1">（税込）</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#C4956A] text-[#F5F1EB] text-sm tracking-wider hover:bg-[#A67B5B] transition-colors"
                  >
                    購入手続きへ
                  </motion.button>

                  <Link href="/products">
                    <button className="w-full mt-4 text-sm text-[#8B8178] hover:text-[#F5F1EB] transition-colors">
                      買い物を続ける
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 text-[#C4956A]/50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M6 6h15l-1.5 9h-12z" />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                  <path d="M6 6L5 3H2" />
                </svg>
              </div>
              <p className="text-[#8B8178] mb-8">
                カートに商品がありません
              </p>
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#2D2A26] text-[#F5F1EB] text-sm tracking-wider hover:bg-[#1A1816] transition-colors"
                >
                  商品を見る
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Cart() {
  return <CartPage />;
}
