"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const courses = [
  {
    title: "Affiliate Marketing",
    image: "/courses/affiliate.jpg",
  },
  {
    title: "Video Editing",
    image: "/courses/video.jpg",
  },
  {
    title: "Option Trading",
    image: "/courses/trading.jpg",
  },
  {
    title: "Social Media Marketing",
    image: "/courses/social.jpg",
  },
  {
    title: "Millionaire Mindset",
    image: "/courses/mindset.jpg",
  },
  {
    title: "Graphic Design",
    image: "/courses/design.jpg",
  },
];

export default function CourseSlider() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 400,
          behavior: "smooth",
        });
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 10
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="relative z-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 py-6 px-4 md:px-8 mt-12">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2 snap-x snap-mandatory"
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="min-w-[90vw] md:min-w-[65vw] lg:min-w-[45vw] snap-center rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/10 overflow-hidden transition-transform hover:scale-105 duration-500"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={1280}
              height={720}
              className="w-full h-auto object-cover aspect-video"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}