"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartSidebar() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-[#1A1816]/50 z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#F5F1EB] z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#E8E0D5]">
                <h2
                  className="text-xl tracking-wider text-[#2D2A26]"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  カート
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-[#E8E0D5] rounded-full transition-colors"
                  aria-label="カートを閉じる"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2D2A26"
                    strokeWidth="1.5"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-20 h-20 mb-6 text-[#C4956A] candle-glow">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2c-.5 0-1 .19-1.41.59L9 4.17 7.41 2.59A2 2 0 0 0 4.59 5.41L6.17 7 4.59 8.59a2 2 0 1 0 2.82 2.82L9 9.83l1.59 1.58a2 2 0 0 0 2.82 0L15 9.83l1.59 1.58a2 2 0 0 0 2.82-2.82L17.83 7l1.58-1.59a2 2 0 0 0-2.82-2.82L15 4.17l-1.59-1.58A2 2 0 0 0 12 2z" />
                        <path d="M12 10v12M8 22h8" />
                      </svg>
                    </div>
                    <p className="text-[#8B8178] mb-2">
                      カートは空です
                    </p>
                    <p className="text-sm text-[#8B8178]/70">
                      お気に入りのキャンドルを見つけましょう
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex space-x-4"
                      >
                        {/* Image */}
                        <div className="w-20 h-20 bg-[#E8E0D5] rounded overflow-hidden flex-shrink-0">
                          <div className="w-full h-full flex items-center justify-center text-[#C4956A]">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                              <ellipse cx="12" cy="19" rx="6" ry="3" />
                              <rect x="10" y="8" width="4" height="11" rx="1" />
                              <path d="M12 2c-2 2-2 4 0 6 2-2 2-4 0-6z" />
                            </svg>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-[#2D2A26] truncate">
                            {item.nameJa}
                          </h3>
                          <p className="text-xs text-[#8B8178] mt-1">
                            {item.scent}
                          </p>
                          <p className="text-sm text-[#C4956A] mt-2">
                            ¥{item.price.toLocaleString()}
                          </p>

                          {/* Quantity */}
                          <div className="flex items-center space-x-3 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-6 h-6 flex items-center justify-center border border-[#E8E0D5] hover:border-[#C4956A] transition-colors"
                            >
                              -
                            </button>
                            <span className="text-sm w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-6 h-6 flex items-center justify-center border border-[#E8E0D5] hover:border-[#C4956A] transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="self-start p-1 text-[#8B8178] hover:text-[#2D2A26] transition-colors"
                          aria-label="削除"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-[#E8E0D5] bg-[#F5F1EB]">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#8B8178]">小計</span>
                    <span className="text-xl text-[#2D2A26]">
                      ¥{totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-[#8B8178] mb-4">
                    送料は購入手続き時に計算されます
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#2D2A26] text-[#F5F1EB] py-4 text-sm tracking-wider hover:bg-[#1A1816] transition-colors"
                  >
                    購入手続きへ
                  </motion.button>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full mt-3 text-sm text-[#8B8178] hover:text-[#2D2A26] transition-colors"
                  >
                    買い物を続ける
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
