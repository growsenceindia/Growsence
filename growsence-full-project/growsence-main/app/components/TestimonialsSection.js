"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aman Sharma",
    feedback: "&quot;Growsence changed my life! I now earn while I learn.&quot;",
    image: "/avatars/student1.jpg",
    rating: 5,
  },
  {
    name: "Priya Verma",
    feedback: "&quot;The support and platform quality is truly unmatched.&quot;",
    image: "/avatars/student2.jpg",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    feedback: "&quot;A great decision for my career. Real results.&quot;",
    image: "/avatars/student3.jpg",
    rating: 5,
  },
  {
    name: "Neha Singh",
    feedback: "&quot;Courses are practical, useful and really premium.&quot;",
    image: "/avatars/student4.jpg",
    rating: 5,
  },
  {
    name: "Ravi Chauhan",
    feedback: "&quot;Loved the interactive AI and XP gamification!&quot;",
    image: "/avatars/student5.jpg",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    feedback: "&quot;Best community, best trainers, best platform.&quot;",
    image: "/avatars/student6.jpg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Loved by 500+ Students
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold text-gray-800">{t.name}</p>
                  <p className="text-yellow-500 text-sm">{"★".repeat(t.rating)}</p>
                </div>
              </div>
              <p className="text-gray-600 text-base">{t.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}