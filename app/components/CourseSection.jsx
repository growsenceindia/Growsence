'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaBolt } from 'react-icons/fa';

const courses = [
  {
    title: 'Spoken English',
    level: 'Basic',
    icon: <FaStar className="text-yellow-400" />,
  },
  {
    title: 'Affiliate Marketing',
    level: 'Basic',
    icon: <FaStar className="text-yellow-400" />,
  },
  {
    title: 'Graphic Design',
    level: 'Pro',
    icon: <FaBolt className="text-purple-500" />,
  },
  {
    title: 'Share Market Expert',
    level: 'Pro',
    icon: <FaBolt className="text-purple-500" />,
  },
];

const CourseSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#f0f4ff] to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          📚 Our Premium Courses
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Master essential skills to grow your income, brand, and confidence. Designed for real-world success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white/30 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.level} Course</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;