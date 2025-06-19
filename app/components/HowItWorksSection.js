'use client';
import { motion } from 'framer-motion';
import { FaBook, FaMoneyBillWave, FaChalkboardTeacher, FaSeedling } from 'react-icons/fa';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <FaBook size={30} />,
      title: 'Learn',
      desc: 'Start with powerful video courses & expert mentorship.',
    },
    {
      icon: <FaMoneyBillWave size={30} />,
      title: 'Earn',
      desc: 'Start earning from affiliate system and freelancing tools.',
    },
    {
      icon: <FaChalkboardTeacher size={30} />,
      title: 'Educate',
      desc: 'Help others grow and build your own personal brand.',
    },
    {
      icon: <FaSeedling size={30} />,
      title: 'Grow',
      desc: 'Grow mentally, emotionally & financially with Growsence.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🚀 How Growsence Works
        </motion.h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          A simple journey that transforms your skills into income and impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-gray-100 hover:bg-blue-50 shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-blue-600 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}