"use client";

import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      nameJa: product.nameJa,
      price: product.price,
      image: product.image,
      scent: product.scentJa,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[#E8E0D5] overflow-hidden mb-4">
        {/* Placeholder Candle Illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-[#C4956A] candle-glow"
          >
            <svg
              width="80"
              height="120"
              viewBox="0 0 80 120"
              fill="currentColor"
            >
              {/* Candle body */}
              <rect x="20" y="40" width="40" height="70" rx="4" opacity="0.3" />
              {/* Wick */}
              <rect x="38" y="30" width="4" height="12" fill="#2D2A26" rx="1" />
              {/* Flame */}
              <ellipse cx="40" cy="20" rx="8" ry="15" fill="#C4956A" />
              <ellipse cx="40" cy="22" rx="4" ry="8" fill="#F5F1EB" opacity="0.6" />
            </svg>
          </motion.div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.new && (
            <span className="bg-[#C4956A] text-[#F5F1EB] text-xs px-2 py-1 tracking-wider">
              NEW
            </span>
          )}
          {product.featured && (
            <span className="bg-[#2D2A26] text-[#F5F1EB] text-xs px-2 py-1 tracking-wider">
              人気
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 bg-[#F5F1EB]/95 backdrop-blur-sm text-[#2D2A26] py-3 text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#F5F1EB]"
        >
          カートに追加
        </motion.button>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3
              className="text-base text-[#2D2A26] group-hover:text-[#C4956A] transition-colors"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              {product.nameJa}
            </h3>
            <p className="text-xs text-[#8B8178] tracking-wider mt-0.5">
              {product.name}
            </p>
          </div>
          <p className="text-sm text-[#C4956A]">
            ¥{product.price.toLocaleString()}
          </p>
        </div>

        <p className="text-xs text-[#8B8178]">{product.scentJa}</p>

        <div className="flex items-center space-x-4 text-xs text-[#8B8178]">
          <span>{product.burnTime}</span>
          <span>·</span>
          <span>{product.size}</span>
        </div>
      </div>
    </motion.div>
  );
}
