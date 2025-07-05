"use client";
import { FaRocket, FaUsers, FaHeart } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About <span className="text-blue-600">Growsence</span>
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Growsence is India’s most advanced Ed-Tech + Affiliate platform. We help students learn in-demand skills, grow personally & professionally, and earn through a gamified learning experience.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition">
            <FaRocket size={32} className="text-blue-600 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Skill + Career Growth</h4>
            <p className="text-gray-600">Gain real-world skills through structured, affordable online courses designed for youth.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition">
            <FaUsers size={32} className="text-green-600 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Affiliate System</h4>
            <p className="text-gray-600">Earn while you learn through India’s most rewarding team-based affiliate system.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition">
            <FaHeart size={32} className="text-red-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">CareSense + Support</h4>
            <p className="text-gray-600">Your well-being matters. Our emotional intelligence tools & AI assistant guide you daily.</p>
          </div>
        </div>
      </div>
    </section>
  );
}