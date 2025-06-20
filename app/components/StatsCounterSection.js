"use client";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Courses", value: 0, suffix: "+", icon: "📚" },
  { label: "Earned by Students", value: 520000, prefix: "₹", suffix: "+", icon: "💰" },
  { label: "Active Learners Today", value: 500, suffix: "+", icon: "💻" },
];

export default function StatsCounterSection() {
  const [dailyBoost, setDailyBoost] = useState(0);

  useEffect(() => {
    const randomBoost = Math.floor(Math.random() * 50); // Adds 0–50 users on each load
    setDailyBoost(randomBoost);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Trusted by Lakhs of Students & Educators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl font-bold">
                <CountUp
                  start={0}
                  end={stat.value + dailyBoost}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix || ""}
                  prefix={stat.prefix || ""}
                />
              </h3>
              <p className="mt-2 text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}