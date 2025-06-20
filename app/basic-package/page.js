"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BasicPackageCoursePage() {
  const courses = [
    {
      title: "Spoken English Mastery",
      description:
        "Speak English fluently with confidence through engaging video lessons and daily tasks.",
      image: "/courses/spoken.jpg",
    },
    {
      title: "Affiliate Marketing",
      description:
        "Learn step-by-step how to earn online with our easy-to-follow affiliate marketing course.",
      image: "/courses/affiliate.jpg",
    },
    {
      title: "Lead Generation",
      description:
        "Master the art of attracting customers through practical lead generation techniques.",
      image: "/courses/lead.jpg",
    },
    {
      title: "Communication Skills",
      description:
        "Boost your personal and professional communication with proven methods.",
      image: "/courses/communication.jpg",
    },
    {
      title: "Video Editing",
      description:
        "Create engaging videos using mobile & PC tools. Perfect for YouTube and reels.",
      image: "/courses/editing.jpg",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-10"
        >
          Growsence Basic Package Courses
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}