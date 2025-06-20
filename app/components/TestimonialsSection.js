"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Anjali Sharma",
    review: "Growsence changed my life! I started with no skills, and now I earn daily through freelancing and affiliate marketing. Best decision ever!",
    image: "/testimonials/anjli.jpg",
    rating: 5,
    course: "Affiliate Marketing"
  },
  {
    name: "Ravi Mehta",
    review: "Their video editing course is so practical! I’ve already landed 3 paid projects. The mentors actually care.",
    image: "/testimonials/ravi.jpg",
    rating: 5,
    course: "Video Editing"
  },
  {
    name: "Mohit Verma",
    review: "Growsence affiliate dashboard is insane. I made ₹9,000 in my first month itself. Highly recommend to all students!",
    image: "/testimonials/mohit.jpg",
    rating: 5,
    course: "Referral & Earnings"
  },
  {
    name: "Sakshi Rani",
    review: "What I loved the most is their GrowBot AI and CareSense. Never seen such care from any platform. I feel supported every day!",
    image: "/testimonials/sakshi.jpg",
    rating: 5,
    course: "Emotional Intelligence"
  },
  {
    name: "Aman Chaudhary",
    review: "They actually give certificates with public verification links and NFTs! And the content is gold.",
    image: "/testimonials/aman.jpg",
    rating: 5,
    course: "Stock Market Pro"
  },
  {
    name: "Priya Das",
    review: "Their graphic design course gave me confidence to design for clients. Loved the XP rewards and gamified style.",
    image: "/testimonials/priya.jpg",
    rating: 5,
    course: "Graphic Design"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-4 md:px-10" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Real Stories from Our Students
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.course}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">"{t.review}"</p>
              <div className="flex gap-1 text-yellow-500">
                {Array.from({ length: t.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}