"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-white py-16 px-6 md:px-12 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
        >
          Build Skills that <span className="text-blue-600">Pay Bills</span> <br />
          Learn & Earn with <span className="text-indigo-600">Growsence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-10"
        >
          India's Fastest Growing Digital Earning & Learning Platform
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            Enroll Now
          </button>
          <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300">
            Login
          </button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12"
        >
          <Image
            src="/pexels-photo-4145190.jpg"
            alt="Hero Banner"
            width={1000}
            height={600}
            className="rounded-3xl shadow-xl mx-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}