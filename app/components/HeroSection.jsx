'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#fef9f5] to-[#f9f6f2] text-gray-900 py-16 px-6 md:px-20 rounded-b-3xl shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Growsence: Learn. Earn. Grow.
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            India’s most affordable, rewarding & AI-powered learning platform — where students learn skills, earn rewards, and grow emotionally & financially.
          </p>
          <a
            href="#courses"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            🚀 Enroll Now
          </a>
        </motion.div>

        <motion.img
          src="/file.svg"
          alt="Hero Image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 max-w-md rounded-3xl shadow-xl"
        />
      </div>
    </section>
  );
}