'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function FestivalPage() {
  const [attendees, setAttendees] = useState(0);
  const [speakers, setSpeakers] = useState(0);
  const [states, setStates] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);

  useEffect(() => {
    const animateCount = (setFn, target) => {
      let count = 0;
      const step = target / 50;
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          setFn(target);
          clearInterval(interval);
        } else {
          setFn(Math.floor(count));
        }
      }, 40);
    };

    animateCount(setAttendees, 1500);
    animateCount(setSpeakers, 15);
    animateCount(setStates, 20);
    animateCount(setXpEarned, 50000);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 py-16 px-6 text-center rounded-b-3xl shadow-md">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Growsence Festival 2025 🎉</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          India’s biggest student growth event — knowledge, community & memories packed into one festival.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="https://youtube.com/@growsenceindia" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-all">
            📺 Watch Aftermovie
          </Link>
          <Link href="/gallery" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold transition-all">
            📸 View Gallery
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-12 px-6 max-w-5xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-purple-700">{attendees}+</h2>
          <p className="text-sm">Attendees</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-600">{speakers}</h2>
          <p className="text-sm">Inspiring Speakers</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-green-600">{states}</h2>
          <p className="text-sm">States Participated</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-yellow-600">{xpEarned} XP</h2>
          <p className="text-sm">XP Earned</p>
        </div>
      </div>

      {/* Top Achievers */}
      <div className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">🌟 Top Achievers</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map(i => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-md w-72">
              <Image src={`/festival/achiever${i}.jpg`} alt={`Achiever ${i}`} width={300} height={300} className="rounded-xl mb-4" />
              <h3 className="font-semibold text-lg">Achiever #{i}</h3>
              <p className="text-sm text-gray-500">Special Recognition Badge</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Speaker Highlights */}
      <div className="bg-gradient-to-r from-white to-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">🎤 Guest Speakers</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Dr. Meena", "Mr. Raghav", "Ms. Tiwari"].map((name, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-md w-72">
              <Image src={`/festival/speaker${idx + 1}.jpg`} alt={name} width={300} height={300} className="rounded-xl mb-4" />
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-gray-500">Motivational Speaker</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">🧡 Student Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Riya", "Aman", "Sneha"].map((name, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-orange-50 p-6 rounded-2xl shadow-md w-72">
              <p className="text-sm text-gray-700 mb-4 italic">“It changed my confidence level completely!”</p>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => <FaStar key={j} className="text-yellow-500" />)}
              </div>
              <h4 className="font-semibold">{name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Aftermovie Video */}
      <div className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">📽️ Official Aftermovie</h2>
        <div className="aspect-video max-w-4xl mx-auto">
          <iframe
            className="rounded-xl w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Growsence Festival Aftermovie"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="bg-indigo-600 py-12 text-center text-white rounded-t-3xl mt-10">
        <h2 className="text-2xl font-semibold mb-3">🔥 Ready for the next Growsence Festival?</h2>
        <p className="mb-6">We’re leveling up! Join the waitlist & be the first to know when registrations open.</p>
        <Link href="/coming-soon" className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
          🚀 Join Waitlist
        </Link>
      </div>
    </div>
  );
}