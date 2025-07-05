'use client';
import { motion } from 'framer-motion';
import { FaBrain, FaHeartbeat, FaRupeeSign, FaUsers, FaPrayingHands } from 'react-icons/fa';

const zones = [
  {
    icon: <FaBrain className="text-indigo-500" />,
    title: 'Mind',
    desc: 'Focus, mindset, learning, and mental clarity.',
  },
  {
    icon: <FaHeartbeat className="text-pink-500" />,
    title: 'Health',
    desc: 'Daily fitness, sleep, water & wellness check-ins.',
  },
  {
    icon: <FaRupeeSign className="text-green-600" />,
    title: 'Wealth',
    desc: 'Income planning, savings tracker, earning mindset.',
  },
  {
    icon: <FaUsers className="text-yellow-500" />,
    title: 'Social',
    desc: 'Gratitude, relationships, communication & support.',
  },
  {
    icon: <FaPrayingHands className="text-purple-600" />,
    title: 'Soul',
    desc: 'Journaling, peace, purpose & self-reflection time.',
  },
];

export default function GrowthZoneSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f9f9ff] to-white" id="growth-zones">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          🌱 360° Growth Zones
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Track your life progress across 5 core areas. Earn XP by completing small daily actions in each zone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-5 border-t-4 border-blue-100"
            >
              <div className="text-3xl mb-3">{zone.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">{zone.title}</h3>
              <p className="text-sm text-gray-500">{zone.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}