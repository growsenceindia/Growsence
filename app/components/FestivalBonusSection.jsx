"use client";
import { motion } from "framer-motion";

export default function FestivalBonusSection() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-16 px-6 md:px-10 rounded-2xl shadow-xl my-10 mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
          🎁 Exclusive Festival Bonuses!
        </h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Celebrate success with us! Join now during our festival offer and unlock extra courses, surprise gifts & cashback.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "💥 Unlock 2 Bonus Courses",
              desc: "Join during the festival and get Personal Branding & AI Tools courses absolutely FREE!",
            },
            {
              title: "💸 Cashback Surprise",
              desc: "Up to ₹200 instant cashback to your wallet after joining. Limited time only!",
            },
            {
              title: "🎁 Mystery Gift",
              desc: "Get surprise bonuses like templates, tools, and growth secrets via email.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-orange-200"
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}