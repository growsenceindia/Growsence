"use client";
import { motion } from "framer-motion";
import { FaUserGraduate, FaCertificate, FaVideo, FaWallet } from "react-icons/fa";
import Link from "next/link";

export default function StudentPanelEntry() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-violet-100 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-6"
        >
          🎓 Welcome to Your Growsence Student Dashboard
        </motion.h1>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Unlock your full learning experience: Track progress, earn XP, join leaderboards, download certificates, and more!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaUserGraduate />, label: "My Courses", href: "/student/courses" },
            { icon: <FaCertificate />, label: "Certificates", href: "/student/certificates" },
            { icon: <FaWallet />, label: "Earnings & Referrals", href: "/student/dashboard" },
            { icon: <FaVideo />, label: "Live Trainings", href: "/student/live" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-md border text-center"
            >
              <div className="text-3xl text-indigo-600 mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg text-gray-800">{item.label}</h3>
              <Link
                href={item.href}
                className="inline-block mt-3 text-sm text-blue-500 hover:underline"
              >
                Go to section →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}