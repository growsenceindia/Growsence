// app/festival-bonus/page.js

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FestivalBonusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-red-100 py-10 px-4 md:px-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4">
          🎉 Growsence Festival Bonus 2025 🎁
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Celebrate this festive season with exciting bonuses and rewards from Growsence. Join, refer, and earn more during our limited-time festival campaign!
        </p>
      </motion.div>

      {/* Bonus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-xl text-center">
          <Image src="/bonus1.png" alt="Join Bonus" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-xl font-bold text-orange-800">Joining Bonus</h3>
          <p className="text-gray-600 mt-2">Get ₹200 instantly when you join during the festival period.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-xl text-center">
          <Image src="/bonus2.png" alt="Referral Bonus" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-xl font-bold text-orange-800">Referral Boost</h3>
          <p className="text-gray-600 mt-2">Earn 65% direct referral commission (up from 58%) for a limited time!</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-xl text-center">
          <Image src="/bonus3.png" alt="Leader Reward" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-xl font-bold text-orange-800">Leaderboard Rewards</h3>
          <p className="text-gray-600 mt-2">Top 5 earners will win special gifts worth ₹10,000 each.</p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-14"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-3">
          Don't Miss Out – Offer Valid Till 15th November!
        </h2>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition">
          Enroll Now
        </button>
      </motion.div>
    </div>
  );
}