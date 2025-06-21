"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FestivalBonusPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-purple-800 mb-4"
        >
          🎉 Growsence Festival Bonus
        </motion.h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Celebrate success with exclusive rewards! Unlock limited-time bonus features, secret tools,
          and exciting cashbacks by completing your courses and referring friends this festive season.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {[
            {
              title: "🧧 ₹200 Referral Bonus",
              desc: "Refer friends and get ₹200 instantly in your Growsence Wallet.",
            },
            {
              title: "🎁 Mystery Tool Vault",
              desc: "Complete 3 courses and unlock exclusive AI + marketing tools.",
            },
            {
              title: "📜 Premium Certificate Upgrade",
              desc: "Festive edition digital + NFT certificate with golden badge.",
            },
            {
              title: "💸 Festival Cash Giveaway",
              desc: "Top 5 earners get a guaranteed cashback surprise 🎊",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-purple-700">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}