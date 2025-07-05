"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const courses = [
  { image: "/courses/affiliate.jpg" },
  { image: "/courses/video.jpg" },
  { image: "/courses/trading.jpg" },
  { image: "/courses/social.jpg" },
  { image: "/courses/mindset.jpg" },
  { image: "/courses/design.jpg" },
];

export default function CourseSlider() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const nextScroll = scrollLeft + clientWidth;

        if (nextScroll >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-10 px-4 md:px-8 mt-24 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex justify-center overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-[90%] md:w-[70%] lg:w-[60%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-500 hover:scale-105"
          >
            <Image
              src={course.image}
              alt={`Course ${index + 1}`}
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