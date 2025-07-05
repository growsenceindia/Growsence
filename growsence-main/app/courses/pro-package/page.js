"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function ProPackagePage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");

  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      question: "Will I get all 6 courses at once?",
      answer: "Yes, you'll unlock all Pro courses immediately after payment.",
    },
    {
      question: "Is this beginner friendly?",
      answer: "Yes! Pro Package is designed for beginners to intermediate learners.",
    },
    {
      question: "Can I get certificate for each course?",
      answer: "Yes, you'll receive certificates for each course upon completion.",
    },
  ];

  const modules = [
    "📈 Share Market Expert (From Basics to Trading)",
    "🎨 Graphic Design with Canva & Photoshop",
    "🧠 Rich Mindset Training (Neuro & Habits)",
    "📹 YouTube Growth & Video Strategy",
    "📱 Instagram & Facebook Marketing",
    "💬 WhatsApp Sales + Closing Techniques",
  ];

  return (
    <section className="text-gray-800 bg-white pt-20 px-4 md:px-16 pb-32">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-indigo-800">💼 Pro Package</h1>
        <p className="text-lg text-gray-600 mb-4">
          6 Professional Career-Boosting Skills to Build Your Online Income.
        </p>
        <p className="text-xl font-semibold text-green-600 mb-6">₹999 only</p>
        <Link
          href="/checkout/pro"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700"
        >
          🚀 Buy Now
        </Link>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center my-16">
        <div>
          <h2 className="text-3xl font-bold text-indigo-700">6</h2>
          <p className="text-sm text-gray-500">Courses</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-indigo-700">50+</h2>
          <p className="text-sm text-gray-500">Hours Content</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-indigo-700">6</h2>
          <p className="text-sm text-gray-500">Certificates</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-indigo-700">20+</h2>
          <p className="text-sm text-gray-500">Bonus Tools</p>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-800">🚀 Key Highlights</h2>
        <ul className="grid gap-4 md:grid-cols-2 list-disc pl-5 text-gray-700">
          <li>Career-Oriented Mastery Modules</li>
          <li>Premium Certificates for Each Course</li>
          <li>Daily Self-Growth & XP Leaderboard</li>
          <li>24x7 AI & Mentor Support Access</li>
        </ul>
      </div>

      {/* What You'll Learn */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-800">🎯 What You’ll Learn</h2>
        <ul className="grid gap-3 md:grid-cols-2 list-disc pl-5 text-gray-700">
          <li>Technical + Practical Share Market Skills</li>
          <li>High-Quality Graphic Design for Brands</li>
          <li>Mindset, Focus, and Financial Intelligence</li>
          <li>YouTube Growth Hacking & Monetization</li>
          <li>Organic & Paid Social Media Marketing</li>
          <li>WhatsApp Sales Scripts & Conversion</li>
        </ul>
      </div>

      {/* Modules */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-800">📦 Modules Included</h2>
        <div className="space-y-4">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-md border border-gray-200">
              {mod}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-800">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 font-medium"
              >
                {faq.question}
              </button>
              {faqOpen === index && (
                <div className="px-4 py-3 text-gray-700 bg-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Rate This Course */}
      <div className="mb-24">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-800">⭐ Rate This Course</h2>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`text-2xl cursor-pointer ${
                (hoverRating || rating) >= star ? "text-yellow-400" : "text-gray-300"
              }`}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review..."
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring focus:ring-indigo-300"
          rows={3}
        />
        <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700">
          Submit Review
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm border-t pt-8">
        &copy; {new Date().getFullYear()} Growsence. All rights reserved.
      </footer>
    </section>
  );
}