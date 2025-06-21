"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0a1647] via-[#112b68] to-[#1b3a8b] text-white pt-28 pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Transform Your Life. <br />
          Learn, Grow & Earn with Growsence
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
        >
          India’s Most Advanced Ed-Tech + Affiliate Platform for Students.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-14">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#courses"
            className="bg-white text-indigo-800 font-semibold px-7 py-3 rounded-full shadow-md hover:bg-gray-100 transition text-base"
          >
            🚀 Explore Courses
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/student/login"
            className="bg-[#00c27c] hover:bg-[#00a96a] text-white font-semibold px-7 py-3 rounded-full shadow-md transition text-base"
          >
            👨‍🎓 Student Login
          </motion.a>
        </div>
      </div>

      {/* Floating Glows (stars/dots) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-[25%] left-[60%] w-1.5 h-1.5 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-[30%] right-[20%] w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-[10%] left-[30%] w-[5px] h-[5px] bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-[50%] right-[10%] w-2.5 h-2.5 bg-white/25 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}