'use client';
import { motion } from 'framer-motion';
import { FaUserCircle, FaTrophy, FaMedal } from 'react-icons/fa';

const leaderboardData = [
  { name: 'Amit Sharma', xp: 9800 },
  { name: 'Sneha Verma', xp: 8700 },
  { name: 'Rohan Das', xp: 8200 },
  { name: 'Neha Singh', xp: 7900 },
  { name: 'Kunal Roy', xp: 7600 },
];

const trophyIcon = [<FaTrophy className="text-yellow-400" />, <FaMedal className="text-gray-400" />, <FaMedal className="text-orange-400" />];

export default function XPLeaderboardSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="leaderboard">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          🏆 XP Leaderboard
        </motion.h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Celebrate top learners and affiliates! Earn XP by completing lessons, referrals, reviews, and growth tasks.
        </p>

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-100">
          <div className="grid grid-cols-1 divide-y">
            {leaderboardData.map((user, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  {i < 3 ? trophyIcon[i] : <FaUserCircle className="text-blue-500 text-xl" />}
                  <span className="text-lg font-semibold text-gray-700">{user.name}</span>
                </div>
                <span className="text-indigo-600 font-bold">{user.xp} XP</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}