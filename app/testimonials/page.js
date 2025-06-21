"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aman Sharma",
    image: "/avatars/student1.jpg",
    stars: 5,
    message: "&quot;Growsence changed my life. Best platform for real learning!&quot;",
  },
  {
    name: "Priya Verma",
    image: "/avatars/student2.jpg",
    stars: 5,
    message: "&quot;Trainers, support and quality content — everything is world-class.&quot;",
  },
  {
    name: "Ravi Chauhan",
    image: "/avatars/student5.jpg",
    stars: 5,
    message: "&quot;XP gamification kept me motivated every single day!&quot;",
  },
  {
    name: "Sneha Kapoor",
    image: "/avatars/student6.jpg",
    stars: 5,
    message: "&quot;Certification + support system is what makes Growsence stand out.&quot;",
  },
  {
    name: "Neha Singh",
    image: "/avatars/student4.jpg",
    stars: 5,
    message: "&quot;The AI assistant feels like a real friend — always helpful!&quot;",
  },
  {
    name: "Rahul Mehta",
    image: "/avatars/student3.jpg",
    stars: 5,
    message: "&quot;Was unsure at first but now I feel more confident than ever.&quot;",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          🌟 What Real Students Are Saying
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md border"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full border"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-yellow-500">{"★".repeat(t.stars)}</p>
                </div>
              </div>
              <p className="text-gray-700">{t.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}