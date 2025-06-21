"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white py-24 mt-[70px]">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
        >
          India&apos;s Most Premium Growth Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-8"
        >
          Learn High-Income Skills. Earn. Inspire Others. Growsence is built to
          transform your mindset, money and mission.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Link
            href="#pricing"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 text-lg rounded-full font-semibold shadow-xl transition duration-300"
          >
            Enroll Now
          </Link>
          <Link
            href="/student-login"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-lg rounded-full font-semibold border border-white/20 shadow-xl transition duration-300"
          >
            Login
          </Link>
        </motion.div>
      </div>
    </section>
  );
}