"use client";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Courses", value: 15, suffix: "+", icon: "📚" },
  { label: "Earned by Students", value: 520000, prefix: "₹", suffix: "+", icon: "💰" },
  { label: "Active Learners Today", value: 500, suffix: "+", icon: "💻" },
];

export default function StatsCounterSection() {
  const [dailyBoost, setDailyBoost] = useState(0);
  const [triggerCount, setTriggerCount] = useState(0); // Used to re-render CountUp

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5, // Trigger when 50% in view
  });

  useEffect(() => {
    const randomBoost = Math.floor(Math.random() * 50);
    setDailyBoost(randomBoost);
  }, []);

  useEffect(() => {
    if (inView) {
      setTriggerCount(prev => prev + 1); // Triggers re-render
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-14 leading-snug"
        >
          Trusted by Lakhs of Students & Educators
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={`${i}-${triggerCount}`} // unique key forces remount
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4 drop-shadow">{stat.icon}</div>
              <h3 className="text-4xl font-bold tracking-wide">
                <CountUp
                  start={0}
                  end={stat.value + dailyBoost}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix || ""}
                  prefix={stat.prefix || ""}
                />
              </h3>
              <p className="mt-3 text-gray-300 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}