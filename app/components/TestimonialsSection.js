"use client";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ritika Sharma",
    role: "Student & Affiliate",
    text: "Growsence changed my life! I earned my first ₹8,000 within 10 days after joining. The courses are easy to understand and the support is amazing.",
    image: "/testimonials/ritika.jpg",
  },
  {
    name: "Amit Verma",
    role: "YouTube Marketer",
    text: "The Pro course helped me grow my YouTube channel from 400 to 5,000+ subscribers in 1 month. Growsence is a goldmine!",
    image: "/testimonials/amit.jpg",
  },
  {
    name: "Priya Yadav",
    role: "College Student",
    text: "I started as a student but now I’m also earning from affiliate. The XP, certificates, and AI support make learning fun and rewarding.",
    image: "/testimonials/priya.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Real Success Stories
        </h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition text-left flex flex-col justify-between"
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-700 mb-6 text-sm">{item.text}</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}