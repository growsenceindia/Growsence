'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#001f3f] to-[#003366] text-white px-6 py-16 md:py-24 text-center relative">
      <div className="max-w-5xl mx-auto z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          🚀 Learn, Earn & Grow with <span className="text-yellow-400">Growsence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          India's most powerful learning + earning platform for youth & creators
        </motion.p>

        <motion.a
          href="#courses"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-8 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition hover:bg-yellow-300"
        >
          Enroll Now
        </motion.a>
      </div>

      <Image
        src="/globe.svg"
        alt="Growsence"
        width={500}
        height={500}
        className="absolute bottom-0 right-0 opacity-20 hidden md:block"
      />
    </section>
  );
}