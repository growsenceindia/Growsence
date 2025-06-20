"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Riya Sharma",
    photo: "/students/riya.jpg",
    course: "Affiliate Marketing",
    feedback:
      "Growsence ne meri life badal di. Earning ka asli tarika yahan seekha maine. Support bhi 24/7 milta hai!",
  },
  {
    name: "Aman Verma",
    photo: "/students/aman.jpg",
    course: "Spoken English",
    feedback:
      "Mujhe job ke interview me English ki wajah se problem hoti thi, ab mai confidently bolta hu. Dhanyawaad Growsence!",
  },
  {
    name: "Neha Kumari",
    photo: "/students/neha.jpg",
    course: "Share Market Expert",
    feedback:
      "Market samajhne ke liye jahan 20 hazaar lagte, wahan yahan 1/10th me expert ban gaye. Real profit ab ho raha hai!",
  },
  {
    name: "Ravi Singh",
    photo: "/students/ravi.jpg",
    course: "Video Editing",
    feedback:
      "YouTube channel ke liye khud se video banata hoon. Growsence ka editing course full practical tha!",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-blue-700 mb-12"
      >
        What Our Students Say
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.photo}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full border-2 border-blue-500"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                <p className="text-sm text-gray-500">Course: {t.course}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{t.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}