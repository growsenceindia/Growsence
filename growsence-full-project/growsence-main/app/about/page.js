import Image from "next/image";

export default function AboutPage() { return ( <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-sans"> {/* Hero Section */} <section className="text-center py-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900"> <h1 className="text-4xl sm:text-5xl font-bold mb-4">Fueling Student Growth Since Day One</h1> <p className="text-lg sm:text-xl mb-6">Learn. Earn. Inspire.</p> <p className="max-w-2xl mx-auto text-base sm:text-lg mb-8"> Growsence empowers India’s youth to unlock their potential through skills, income, and purpose. </p> <a href="/courses" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Explore Courses</a> </section>

{/* Journey Timeline */}
  <section className="py-20 px-4 bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-semibold text-center mb-12">Our Journey</h2>
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="text-xl font-bold">2022</h3>
        <p>Growsence idea was born to empower students.</p>
      </div>
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="text-xl font-bold">2023</h3>
        <p>First 100 students enrolled. Affiliate system launched.</p>
      </div>
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="text-xl font-bold">2024</h3>
        <p>₹10 Lakh+ paid to students. CareSense emotional wellness launched.</p>
      </div>
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="text-xl font-bold">2025-26</h3>
        <p>Goal: 1 Lakh+ student entrepreneurs across India.</p>
      </div>
    </div>
  </section>

  {/* Mission, Vision, Why Us */}
  <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
    <h2 className="text-3xl font-semibold text-center mb-12">What Drives Us</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-2">Mission</h3>
        <p>To democratize education and earning for every Indian student.</p>
      </div>
      <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-2">Vision</h3>
        <p>Build 1 Lakh+ youth-led digital entrepreneurs by 2026.</p>
      </div>
      <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-2">Why Growsence?</h3>
        <p>We blend skill-building, income generation, and emotional wellness in one platform.</p>
      </div>
    </div>
  </section>

  {/* Unique Features */}
  <section className="py-20 px-4 bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-semibold text-center mb-12">What Makes Us Different?</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
      <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded shadow">🤖<p>AI Assistant + XP Levels</p></div>
      <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded shadow">🧠<p>CareSense Wellness</p></div>
      <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded shadow">💸<p>Auto Affiliate Payouts</p></div>
      <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded shadow">📜<p>NFT Verified Certificates</p></div>
      <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded shadow">📱<p>24/7 WhatsApp Support</p></div>
      <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded shadow">🎯<p>Vision Board & Goal Tracker</p></div>
      <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded shadow">🔐<p>Secure Student Panel</p></div>
      <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded shadow">🚀<p>Learn + Earn Platform</p></div>
    </div>
  </section>

  {/* Counters */}
  <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
    <h2 className="text-3xl font-semibold text-center mb-12">Growsence in Numbers</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
      <div><p className="text-4xl font-bold">500+</p><p>Active Students</p></div>
      <div><p className="text-4xl font-bold">₹10L+</p><p>Total Earnings Paid</p></div>
      <div><p className="text-4xl font-bold">10+</p><p>Skill Courses</p></div>
      <div><p className="text-4xl font-bold">58%</p><p>Affiliate Commission</p></div>
    </div>
  </section>

  {/* Testimonials */}
  <section className="py-20 px-4 bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-semibold text-center mb-12">Student Voices</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
        <p>“Maine ₹32,000 sirf Growsence se kamaye!”</p>
        <p className="mt-2 font-bold">– Ramesh, Patna</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
        <p>“Yeh normal course nahi, life-changer hai.”</p>
        <p className="mt-2 font-bold">– Anjali, Delhi</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
        <p>“Learn, Earn, Inspire – literally true here.”</p>
        <p className="mt-2 font-bold">– Karan, Lucknow</p>
      </div>
    </div>
  </section>

  {/* Final CTA */}
  <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
    <h2 className="text-3xl font-bold mb-4">It’s your time to grow with Growsence.</h2>
    <p className="mb-6 text-lg">Join 500+ students who are learning, earning, and inspiring others every day.</p>
    <a href="/courses" className="inline-block bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100">Join the Movement</a>
  </section>
</div>

); 
}