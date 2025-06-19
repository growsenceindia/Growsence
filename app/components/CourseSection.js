// app/components/CourseSection.js
"use client";

import Image from "next/image";

const CourseSection = () => {
  const courses = [
    {
      name: "Basic Package",
      price: "₹499",
      image: "/basic.png",
      features: [
        "Spoken English",
        "Affiliate Marketing",
        "Lead Generation",
        "Communication Skills",
        "Video Editing",
      ],
    },
    {
      name: "Pro Package",
      price: "₹1,499",
      image: "/pro.png",
      features: [
        "Share Market Expert",
        "Graphic Design",
        "Rich Mindset",
        "YouTube Mastery",
        "Instagram, FB & WhatsApp Marketing",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Our Popular Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border-2 border-red-600 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                {pkg.name}
              </h3>
              <p className="text-center text-lg text-red-400 font-semibold mb-4">
                {pkg.price}
              </p>
              <ul className="space-y-2 text-sm md:text-base">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <a
                  href="https://wa.me/919835742586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;