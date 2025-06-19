"use client";
import { FaBolt, FaCrown, FaUserGraduate, FaWallet } from "react-icons/fa";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Why Choose <span className="text-blue-600">Growsence</span>?
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
          Join thousands of students transforming their lives with skill-building, real earnings, and lifestyle growth.
        </p>

        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <FaBolt size={32} className="text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Skill + Earning</h4>
            <p className="text-gray-600 text-sm">Learn high-demand skills and earn instantly through affiliate sales.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <FaUserGraduate size={32} className="text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Student Friendly</h4>
            <p className="text-gray-600 text-sm">Affordable pricing, 24/7 support, and mobile-first design for all learners.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <FaCrown size={32} className="text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Premium Content</h4>
            <p className="text-gray-600 text-sm">Carefully curated video + PDF content, AI tools, XP-based learning.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <FaWallet size={32} className="text-yellow-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Instant Payouts</h4>
            <p className="text-gray-600 text-sm">₹200+ payout system with 58%–75% commissions & auto course unlocks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}