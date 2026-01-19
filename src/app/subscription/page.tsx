"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/context/CartContext";
import { subscriptionPlans } from "@/data/products";

function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Header />
      <CartSidebar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#2D2A26] to-[#1A1816] text-[#F5F1EB]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-sm tracking-[0.3em] text-[#C4956A] mb-4"
            >
              SUBSCRIPTION
            </h1>
            <p
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              定期便
            </p>
            <p className="text-[#8B8178] max-w-xl mx-auto">
              季節に合わせた香りを、毎月お届け。
              会員限定の特典や、ここでしか手に入らない香りをお楽しみください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative p-8 cursor-pointer transition-all ${
                  plan.popular
                    ? "bg-[#2D2A26] text-[#F5F1EB]"
                    : "bg-[#E8E0D5] text-[#2D2A26]"
                } ${
                  selectedPlan === plan.id
                    ? "ring-2 ring-[#C4956A]"
                    : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#C4956A] text-[#F5F1EB] text-xs px-4 py-1 tracking-wider">
                      人気
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3
                    className="text-2xl mb-2"
                    style={{ fontFamily: "var(--font-noto-serif), serif" }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs tracking-wider ${
                      plan.popular ? "text-[#C4956A]" : "text-[#8B8178]"
                    }`}
                  >
                    {plan.nameEn}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-4xl" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    ¥{plan.price.toLocaleString()}
                  </span>
                  <span className={`text-sm ml-1 ${plan.popular ? "text-[#8B8178]" : "text-[#8B8178]"}`}>
                    {plan.id === "monthly" ? "/月" : plan.id === "quarterly" ? "/3ヶ月" : "/年"}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-center text-sm mb-8 ${plan.popular ? "text-[#8B8178]" : "text-[#8B8178]"}`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-[#C4956A]" : "text-[#C4956A]"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 text-sm tracking-wider transition-colors ${
                    plan.popular
                      ? "bg-[#C4956A] text-[#F5F1EB] hover:bg-[#A67B5B]"
                      : "bg-[#2D2A26] text-[#F5F1EB] hover:bg-[#1A1816]"
                  }`}
                >
                  このプランを選ぶ
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-[#E8E0D5]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-sm tracking-[0.3em] text-[#C4956A] mb-4"
            >
              HOW IT WORKS
            </h2>
            <p
              className="text-2xl text-[#2D2A26]"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              定期便の流れ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "プランを選ぶ", desc: "お好みの配送頻度を選択" },
              { step: 2, title: "登録する", desc: "アカウントを作成して決済" },
              { step: 3, title: "届く", desc: "毎月（または選択した頻度で）お届け" },
              { step: 4, title: "楽しむ", desc: "季節の香りをお楽しみください" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#F5F1EB] rounded-full flex items-center justify-center">
                  <span
                    className="text-2xl text-[#C4956A]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3
                  className="text-lg text-[#2D2A26] mb-2"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#8B8178]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-sm tracking-[0.3em] text-[#C4956A] mb-4"
            >
              FAQ
            </h2>
            <p
              className="text-2xl text-[#2D2A26]"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              よくあるご質問
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "いつでも解約できますか？",
                a: "はい、いつでも解約可能です。次回の発送日の3日前までにマイページからお手続きください。",
              },
              {
                q: "届く香りは選べますか？",
                a: "基本的には季節に合わせた香りをお届けしますが、香り診断の結果を参考にパーソナライズすることも可能です。",
              },
              {
                q: "配送頻度は変更できますか？",
                a: "はい、マイページからいつでも変更可能です。月次から四半期、または年間プランへの変更もできます。",
              },
              {
                q: "ギフトとして贈ることはできますか？",
                a: "はい、ギフト配送にも対応しています。ギフトラッピングとメッセージカードを無料でお付けします。",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-[#E8E0D5] pb-6"
              >
                <h3
                  className="text-lg text-[#2D2A26] mb-3"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {faq.q}
                </h3>
                <p className="text-sm text-[#8B8178] leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#2D2A26] text-[#F5F1EB]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-2xl mb-6"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              まずは月々の灯りから
            </p>
            <p className="text-[#8B8178] mb-8">
              初回は10%オフでお届けします
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#C4956A] text-[#F5F1EB] text-sm tracking-[0.2em] hover:bg-[#A67B5B] transition-colors"
            >
              定期便を始める
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Subscription() {
  return (
    <CartProvider>
      <SubscriptionPage />
    </CartProvider>
  );
}
