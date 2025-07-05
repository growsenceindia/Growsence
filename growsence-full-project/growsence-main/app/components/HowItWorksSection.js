"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMoneyBillWave, FaHeart } from "react-icons/fa";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <FaGraduationCap className="text-white text-4xl" />,
      title: "Learn",
      description: "Unlock powerful skills like marketing, mindset, editing, and communication through expert-led video modules.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaMoneyBillWave className="text-white text-4xl" />,
      title: "Earn",
      description: "Earn up to ₹1 Lakhs/month by referring others, building your team, and leveling up with performance bonuses.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaHeart className="text-white text-4xl" />,
      title: "Inspire",
      description: "Become a digital leader and inspire others by growing personally and professionally with 360° transformation.",
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 mb-12"
        >
          How <span className="text-cyan-600">Growsence</span> Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className={`rounded-2xl shadow-xl bg-gradient-to-br ${step.color} text-white p-8 flex flex-col items-center`}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm opacity-90">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}