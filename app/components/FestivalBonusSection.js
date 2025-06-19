'use client';
import { motion } from 'framer-motion';
import { FaGift, FaFireAlt, FaMagic } from 'react-icons/fa';

const bonuses = [
  {
    title: '₹100 Extra Affiliate Bonus',
    icon: <FaGift className="text-red-500 text-3xl" />,
    desc: 'Festival bonus credited to your affiliate wallet instantly!',
  },
  {
    title: 'Free Course Add-on',
    icon: <FaMagic className="text-purple-500 text-3xl" />,
    desc: 'Unlock a surprise add-on course when you enroll this week!',
  },
  {
    title: 'Limited-Time Certificate Upgrade',
    icon: <FaFireAlt className="text-yellow-500 text-3xl" />,
    desc: 'Get NFT-backed premium certificate for free this festival.',
  },
];

export default function FestivalBonusSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-orange-100 border-t border-orange-200" id="festival-bonus">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-orange-700 mb-4"
        >
          🎁 Festival Bonus Offers!
        </motion.h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-10">
          This festival, Growsence is celebrating your growth! Don’t miss out on limited-time surprises below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bonuses.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-400"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition">
            🎉 Claim Your Festival Bonus Now
          </button>
        </div>
      </div>
    </section>
  );
}