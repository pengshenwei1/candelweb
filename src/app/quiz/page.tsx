"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider, useCart } from "@/context/CartContext";
import { products, Product } from "@/data/products";

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    value: string;
    moods: string[];
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "今日はどんな気分ですか？",
    options: [
      { label: "リラックスしたい", value: "relax", moods: ["relaxation", "calm", "meditation"] },
      { label: "エネルギーが欲しい", value: "energy", moods: ["energizing", "fresh", "morning"] },
      { label: "ロマンチックな気分", value: "romantic", moods: ["romance", "romantic", "gentle"] },
      { label: "集中したい", value: "focus", moods: ["focus", "meditation", "calm"] },
    ],
  },
  {
    id: 2,
    question: "好きな季節は？",
    options: [
      { label: "春 - 桜と新緑", value: "spring", moods: ["spring", "gentle", "fresh"] },
      { label: "夏 - 海と太陽", value: "summer", moods: ["summer", "fresh", "energizing"] },
      { label: "秋 - 紅葉と温もり", value: "autumn", moods: ["autumn", "cozy", "nostalgic"] },
      { label: "冬 - 静寂と安らぎ", value: "winter", moods: ["relaxation", "calm", "evening"] },
    ],
  },
  {
    id: 3,
    question: "理想の休日の過ごし方は？",
    options: [
      { label: "自然の中でハイキング", value: "nature", moods: ["fresh", "energizing", "morning"] },
      { label: "カフェでゆっくり読書", value: "cafe", moods: ["calm", "relaxation", "focus"] },
      { label: "友人とお茶会", value: "social", moods: ["gentle", "romance", "spring"] },
      { label: "家で映画鑑賞", value: "home", moods: ["cozy", "evening", "relaxation"] },
    ],
  },
  {
    id: 4,
    question: "どんな香りに惹かれますか？",
    options: [
      { label: "花の香り", value: "floral", moods: ["romance", "gentle", "spring"] },
      { label: "森や木の香り", value: "woody", moods: ["relaxation", "meditation", "calm"] },
      { label: "柑橘系の爽やかな香り", value: "citrus", moods: ["fresh", "energizing", "morning"] },
      { label: "スパイシーで温かい香り", value: "spicy", moods: ["cozy", "autumn", "evening"] },
    ],
  },
];

function QuizContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const { addItem } = useCart();

  const handleAnswer = (option: QuizQuestion["options"][0]) => {
    const newAnswers = [...answers, ...option.moods];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate recommendations
      const moodCounts = newAnswers.reduce((acc, mood) => {
        acc[mood] = (acc[mood] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const scoredProducts = products.map((product) => {
        const score = product.mood.reduce((sum, mood) => {
          return sum + (moodCounts[mood] || 0);
        }, 0);
        return { product, score };
      });

      scoredProducts.sort((a, b) => b.score - a.score);
      setRecommendedProducts(scoredProducts.slice(0, 3).map((sp) => sp.product));
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
    setRecommendedProducts([]);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Header />
      <CartSidebar />

      <section className="pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="flex justify-between text-sm text-[#8B8178] mb-2">
                    <span>質問 {currentQuestion + 1} / {quizQuestions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1 bg-[#E8E0D5] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#C4956A]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h1
                  className="text-2xl md:text-3xl text-[#2D2A26] text-center mb-12"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {quizQuestions[currentQuestion].question}
                </h1>

                {/* Options */}
                <div className="space-y-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-6 text-left bg-[#F5F1EB] border border-[#E8E0D5] hover:border-[#C4956A] hover:bg-[#E8E0D5]/50 transition-all group"
                    >
                      <span className="text-lg text-[#2D2A26] group-hover:text-[#C4956A] transition-colors">
                        {option.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Back Button */}
                {currentQuestion > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => {
                      setCurrentQuestion(currentQuestion - 1);
                      setAnswers(answers.slice(0, -quizQuestions[currentQuestion - 1].options[0].moods.length));
                    }}
                    className="mt-8 text-sm text-[#8B8178] hover:text-[#2D2A26] transition-colors"
                  >
                    ← 前の質問に戻る
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Results Header */}
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 mx-auto mb-6 text-[#C4956A]"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </motion.div>
                  <h1
                    className="text-3xl text-[#2D2A26] mb-4"
                    style={{ fontFamily: "var(--font-noto-serif), serif" }}
                  >
                    あなたにおすすめの香り
                  </h1>
                  <p className="text-[#8B8178]">
                    あなたの回答に基づいて、ぴったりのキャンドルを選びました
                  </p>
                </div>

                {/* Recommended Products */}
                <div className="space-y-6">
                  {recommendedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.15 }}
                      className="flex items-center space-x-6 p-6 bg-[#E8E0D5] group"
                    >
                      {/* Rank */}
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-[#C4956A]">
                        <span
                          className="text-2xl"
                          style={{ fontFamily: "var(--font-cormorant), serif" }}
                        >
                          {index + 1}
                        </span>
                      </div>

                      {/* Product Image Placeholder */}
                      <div className="flex-shrink-0 w-24 h-24 bg-[#F5F1EB] flex items-center justify-center">
                        <div className="text-[#C4956A] candle-glow">
                          <svg width="40" height="60" viewBox="0 0 40 60" fill="currentColor">
                            <rect x="10" y="25" width="20" height="30" rx="2" opacity="0.4" />
                            <ellipse cx="20" cy="15" rx="5" ry="10" />
                          </svg>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-lg text-[#2D2A26]"
                          style={{ fontFamily: "var(--font-noto-serif), serif" }}
                        >
                          {product.nameJa}
                        </h3>
                        <p className="text-xs text-[#8B8178] tracking-wider mt-0.5">
                          {product.name}
                        </p>
                        <p className="text-sm text-[#8B8178] mt-2 line-clamp-2">
                          {product.descriptionJa}
                        </p>
                        <p className="text-[#C4956A] mt-2">
                          ¥{product.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Add to Cart */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          addItem({
                            id: product.id,
                            name: product.name,
                            nameJa: product.nameJa,
                            price: product.price,
                            image: product.image,
                            scent: product.scentJa,
                          })
                        }
                        className="flex-shrink-0 px-6 py-3 bg-[#2D2A26] text-[#F5F1EB] text-sm tracking-wider hover:bg-[#1A1816] transition-colors"
                      >
                        追加
                      </motion.button>
                    </motion.div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetQuiz}
                    className="px-8 py-3 border border-[#2D2A26] text-[#2D2A26] text-sm tracking-wider hover:bg-[#2D2A26] hover:text-[#F5F1EB] transition-colors"
                  >
                    もう一度診断する
                  </motion.button>
                  <Link href="/products">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-[#C4956A] text-[#F5F1EB] text-sm tracking-wider hover:bg-[#A67B5B] transition-colors"
                    >
                      すべての商品を見る
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Quiz() {
  return (
    <CartProvider>
      <QuizContent />
    </CartProvider>
  );
}
