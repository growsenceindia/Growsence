'use client';
import CourseSection from './components/CourseSection';
import CertificateSection from './components/CertificateSection';
import CareSenseSection from './components/CareSenseSection';
import GrowthZoneSection from './components/GrowthZoneSection';
import XPLeaderboardSection from './components/XPLeaderboardSection';
import TrustRefundSection from './components/TrustRefundSection';
import FestivalBonusSection from './components/FestivalBonusSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import ProgressBar from './components/ProgressBar';
import HowItWorksSection from './components/HowItWorksSection';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from './components/Navbar';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Grow Smarter. Earn Faster.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          India’s most gamified platform to learn, earn & build your personal brand.
        </motion.p>

        <div className="mt-10 flex gap-4">
          <Link href="#courses">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg"
            >
              Enroll Now
            </motion.button>
          </Link>
          <Link href="#demo">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-white border border-gray-300 rounded-full"
            >
              Watch Demo
            </motion.button>
          </Link>
        </div>
      </section>
{/* Course Section */}
<section id="courses" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
    🌟 Our Courses
  </h2>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {[
      { title: "🗣️ Spoken English", desc: "Speak fluently & confidently." },
      { title: "🎯 Affiliate Marketing", desc: "Earn from referrals." },
      { title: "🚀 Lead Generation", desc: "Boost your business." },
      { title: "📹 Video Editing", desc: "Edit like a pro." },
      { title: "💼 Communication Skills", desc: "Impress with words." },
      { title: "📊 Share Market Expert", desc: "Master stock trading." },
    ].map((course, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-md p-6 hover:scale-[1.02] transition-all duration-300 border-l-4 border-blue-500"
      >
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600">{course.desc}</p>
      </div>
    ))}
  </div>
</section>
<Navbar />
<ProgressBar />
<CourseSection />
<CertificateSection />
<HowItWorksSection />
<CareSenseSection />
<GrowthZoneSection />
<XPLeaderboardSection />
<FestivalBonusSection />
<TrustRefundSection />
<ContactSection />
<a
  href="#pricing" // ya phir https://growsence.in/pay jahan enroll hota ho
  className="fixed bottom-20 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
>
  🚀 Enroll Now
</a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919835742586"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaWhatsapp size={24} />
      </a>
      <FooterSection />
      <ScrollToTopButton />
    </main>
  );
}