import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-16 text-center rounded-b-3xl shadow-lg">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">What Real Students Say</h1>
        <p className="text-lg text-gray-600">Stories of Growth. Confidence. Transformation.</p>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={`/testimonials/user${i + 1}.jpg`}
                alt="Student"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">Student Name</p>
                <p className="text-sm text-green-600">✅ Verified Student</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              “Growsence helped me build confidence and earn from my skills. The XP and leaderboard system kept me super motivated!”
            </p>
            <div className="mt-4 text-yellow-500 text-lg">★★★★★</div>
          </div>
        ))}
      </section>

      {/* Video Testimonials */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">🎥 Real Video Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/video${i}`}
                title={`Testimonial ${i}`}
                className="w-full h-full rounded-xl shadow"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-12 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-4xl font-bold text-indigo-700">12,500+</p>
            <p className="text-sm text-gray-600">Happy Students</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-700">85%</p>
            <p className="text-sm text-gray-600">Course Completion Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-700">9.2/10</p>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-700">7,800+</p>
            <p className="text-sm text-gray-600">Certificates Issued</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-gray-600 mb-6">Join thousands of learners building their skills with Growsence.</p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition">
          Enroll Now
        </button>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Growsence. All rights reserved.
      </footer>
    </div>
  );
                  }
