'use client';
import { motion } from 'framer-motion';
import { FaSmile, FaHeart, FaCloud, FaBell, FaStar, FaBrain } from 'react-icons/fa';

const features = [
  {
    title: 'Mood Check-In',
    icon: <FaSmile className="text-yellow-400" />,
    desc: 'Daily emoji-based mood tracker with personalized responses.',
  },
  {
    title: 'GrowBot Hug Mode',
    icon: <FaHeart className="text-red-400" />,
    desc: 'AI assistant that comforts students during stress.',
  },
  {
    title: 'Self-Care Reminders',
    icon: <FaBell className="text-green-500" />,
    desc: 'Smart alerts for hydration, sleep, food & mindfulness.',
  },
  {
    title: 'Digital Therapy Room',
    icon: <FaCloud className="text-blue-400" />,
    desc: 'Private voice & text journaling space for emotional release.',
  },
  {
    title: 'Emotional XP Rewards',
    icon: <FaStar className="text-pink-400" />,
    desc: 'Earn XP for consistency, wellness check-ins & self-reflection.',
  },
  {
    title: 'Mood-Adaptive Theme',
    icon: <FaBrain className="text-purple-500" />,
    desc: 'Dashboard color & background change based on user mood.',
  },
];

export default function CareSenseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f0f4ff] to-[#e0f7ff]" id="caresense">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10 text-[#2d2d2d]"
        >
          🧠 CareSense – Emotional Intelligence for Students
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-300 hover:shadow-xl transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}