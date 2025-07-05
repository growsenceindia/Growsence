"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();

  const courses = [
    {
      id: "pro",
      title: "Pro Package",
      image: "/images/pro-package.png", // Upload a 16:9 image in public/images
      modules: 8,
      language: "Hindi",
      access: "Lifetime",
      price: "₹2999",
    },
    {
      id: "basic",
      title: "Basic Package",
      image: "/images/basic-package.png", // Upload a 16:9 image in public/images
      modules: 4,
      language: "Hindi",
      access: "Lifetime",
      price: "₹1499",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Top Pro Recommendations */}
      <section className="py-10 bg-gradient-to-r from-indigo-700 to-purple-800 text-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">🔥 Recommended Courses</h2>
          <p className="text-lg opacity-90">Unlock your potential with our top-performing Pro courses.</p>
        </div>
      </section>

      {/* All Courses Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8">All Courses</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => router.push(`/courses/${course.id}`)}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold">{course.title}</h4>
                <p className="text-sm text-gray-500 mb-2">Growsence</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>📘 {course.modules} Modules</li>
                  <li>🗣️ {course.language}</li>
                  <li>⏳ {course.access} Access</li>
                </ul>
                <p className="mt-3 font-bold text-indigo-700">{course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Growsence India. All rights reserved.</p>
      </footer>
    </div>
  );
}