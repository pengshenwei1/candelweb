"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-[#E8E0D5] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <span
                className="text-3xl tracking-[0.2em] text-[#F5F1EB]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                AKARI
              </span>
              <span className="text-sm tracking-[0.3em] text-[#C4956A] mt-1">
                灯り
              </span>
              <p className="mt-4 text-sm text-[#8B8178] leading-relaxed">
                あなたの空間に
                <br />
                温かな光を灯す
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-wider text-[#C4956A] mb-4">
              ショップ
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/products", label: "商品一覧" },
                { href: "/quiz", label: "香り診断" },
                { href: "/subscription", label: "定期便" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E8E0D5]/80 hover:text-[#F5F1EB] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm tracking-wider text-[#C4956A] mb-4">
              ブランド
            </h4>
            <ul className="space-y-3">
              {/* Links to be added when pages are created */}
              <li>
                <span className="text-sm text-[#E8E0D5]/50 cursor-default">
                  私たちについて
                </span>
              </li>
              <li>
                <span className="text-sm text-[#E8E0D5]/50 cursor-default">
                  素材へのこだわり
                </span>
              </li>
              <li>
                <span className="text-sm text-[#E8E0D5]/50 cursor-default">
                  お問い合わせ
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm tracking-wider text-[#C4956A] mb-4">
              ニュースレター
            </h4>
            <p className="text-sm text-[#8B8178] mb-4">
              新商品やセールのお知らせを受け取る
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="メールアドレス"
                className="bg-transparent border border-[#8B8178]/30 px-4 py-2 text-sm text-[#F5F1EB] placeholder-[#8B8178] focus:outline-none focus:border-[#C4956A] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-[#C4956A] text-[#F5F1EB] px-4 py-2 text-sm tracking-wider hover:bg-[#A67B5B] transition-colors"
              >
                登録する
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#8B8178]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-[#8B8178]">
            © 2024 Akari. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Instagram", "Twitter", "Pinterest"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-[#8B8178] hover:text-[#C4956A] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
