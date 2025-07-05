"use client";
import { motion } from "framer-motion";
import { FaStar, FaRocket, FaMoneyBillWave, FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";

const features = [
  {
    icon: <FaStar className="text-cyan-600 text-3xl md:text-4xl" />,
    title: "Future-Ready Courses",
    desc: "Master high-income skills like Google Ads, Website Design, AI Tools — tailored for 2025 and beyond.",
  },
  {
    icon: <FaRocket className="text-pink-500 text-3xl md:text-4xl" />,
    title: "Brahmastra Program",
    desc: "From beginner to pro — a deep mentorship system focused on mindset, skills, and monetization.",
  },
  {
    icon: <FaMoneyBillWave className="text-green-500 text-3xl md:text-4xl" />,
    title: "90% Revenue Sharing",
    desc: "Our affiliate system gives maximum earning potential — ₹10 Lakhs/month is real here.",
  },
  {
    icon: <FaHandsHelping className="text-blue-500 text-3xl md:text-4xl" />,
    title: "Comprehensive Support",
    desc: "24/7 WhatsApp, Telegram, email help + GrowBot AI to solve doubts instantly.",
  },
  {
    icon: <FaChalkboardTeacher className="text-purple-500 text-3xl md:text-4xl" />,
    title: "Lead Gen Toolkit",
    desc: "Get ad scripts, funnel videos, message templates to help you close more clients and sales.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Why <span className="text-cyan-600">Growsence</span>?
        </motion.h2>

        <div className="space-y-14">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-10"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm md:text-base max-w-3xl">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}