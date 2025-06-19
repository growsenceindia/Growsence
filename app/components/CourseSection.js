'use client';

import { motion } from 'framer-motion';
import { FaStar, FaBolt } from 'react-icons/fa';

const courses = [
  {
    title: 'Spoken English',
    type: 'Basic',
    description: 'Speak confidently with our expert-led modules.',
  },
  {
    title: 'Affiliate Marketing',
    type: 'Basic',
    description: 'Learn to earn with digital affiliate systems.',
  },
  {
    title: 'Lead Generation',
    type: 'Basic',
    description: 'Master leads using modern marketing tools.',
  },
  {
    title: 'Video Editing',
    type: 'Basic',
    description: 'Create stunning videos with ease.',
  },
  {
    title: 'Share Market Expert',
    type: 'Pro',
    description: 'Decode the market & start investing smartly.',
  },
  {
    title: 'Instagram Mastery',
    type: 'Pro',
    description: 'Grow & monetize your Instagram page.',
  },
];

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm p-6 border border-white/20 transition-all duration-300 hover:shadow-2xl"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-white">{course.title}</h3>
        <span className={`text-sm px-2 py-1 rounded-full ${
          course.type === 'Pro'
            ? 'bg-yellow-400 text-black'
            : 'bg-blue-500 text-white'
        } flex items-center gap-1`}>
          {course.type === 'Pro' ? <FaBolt /> : <FaStar />}
          {course.type}
        </span>
      </div>
      <p className="text-white/80 text-sm">{course.description}</p>
    </motion.div>
  );
};

const CourseSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          🎓 Our Most Loved Courses
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;