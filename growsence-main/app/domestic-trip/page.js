'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function DomesticTripPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const upcomingTrips = [
    { img: '/trips/goa.jpg', city: 'Goa', date: '15–17 July', price: '₹5999' },
    { img: '/trips/shimla.jpg', city: 'Shimla', date: '1–3 August', price: '₹5499' },
    { img: '/trips/jaipur.jpg', city: 'Jaipur', date: '20–22 August', price: '₹4999' },
  ];

  const faqs = [
    { q: 'Can I join solo?', a: 'Yes, many students join solo and make new friends!' },
    { q: 'What’s included in the fee?', a: 'Stay, meals, workshops, sightseeing, and certificates.' },
    { q: 'Is it safe for girls?', a: 'Absolutely. We ensure full safety with verified mentors and 24x7 support.' },
    { q: 'Is there a refund option?', a: 'Refund is available if canceled 7 days prior to trip start date.' },
  ];

  const pastTrips = [
    { city: 'Shimla', date: 'Jan 2024', students: 40 },
    { city: 'Manali', date: 'Oct 2023', students: 32 },
    { city: 'Goa', date: 'Aug 2023', students: 50 },
  ];

  const itinerary = [
    { day: 'Day 1', activity: 'Arrival + Icebreaker Games + Bonfire Night' },
    { day: 'Day 2', activity: 'Mindset Workshop + Adventure Activity + Beach Party' },
    { day: 'Day 3', activity: 'Certification + Group Reflection + Return' },
  ];

  const testimonials = [
    { name: 'Anjali Sharma', text: 'The Growsence trip was life-changing! I made so many friends and gained confidence.' },
    { name: 'Rohit Mehta', text: 'Great mix of fun and learning. The workshops were amazing and so were the beaches!' },
    { name: 'Priya Das', text: 'Felt super safe and motivated throughout the journey. Highly recommend to all students.' }
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Certificate & Badge Preview */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Official Certificate &amp; Badge</h2>
        <p className="mb-6 max-w-2xl mx-auto">Every participant receives a digitally verifiable certificate &amp; achievement badge.</p>
        <Image src="/certificate-preview.jpg" alt="Growsence Certificate" width={700} height={400} className="mx-auto rounded-xl shadow-lg" />
      </section>

      {/* Leader Profile */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Your Mentor</h2>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <Image src="/leader.jpg" alt="Trip Leader" width={120} height={120} className="mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold">Ravi Sinha</h3>
          <p className="text-gray-600">Certified Life Coach &amp; Trip Mentor</p>
          <p className="mt-3 text-sm">Led over 12 successful educational trips with 500+ students.</p>
        </div>
      </section>

      {/* Trip Gallery */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Trip Memories Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(i => (
            <Image key={i} src={`/gallery/img${i}.jpg`} alt={`Trip Memory ${i}`} width={400} height={300} className="rounded-xl object-cover w-full h-60" />
          ))}
        </div>
      </section>

      {/* Instagram Embed */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Follow Our Journey</h2>
        <iframe src="https://www.instagram.com/growsenceindia/embed" className="mx-auto w-full max-w-xl h-[500px] border-0 rounded-xl shadow-md"></iframe>
      </section>

      {/* Live Stats */}
      <section className="py-16 px-4 bg-yellow-100 text-center">
        <h2 className="text-3xl font-bold mb-6">🚀 Impact So Far</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xl font-semibold">
          <div className="bg-white rounded-xl p-6 shadow">12+ Trips</div>
          <div className="bg-white rounded-xl p-6 shadow">500+ Students</div>
          <div className="bg-white rounded-xl p-6 shadow">25+ Cities Covered</div>
          <div className="bg-white rounded-xl p-6 shadow">100% Memories Made</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Students Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-yellow-50 p-6 rounded-xl shadow text-center">
              <p className="text-gray-700 italic">
                {t.text.replace(/"/g, '&quot;').replace(/'/g, '&apos;')}
              </p>
              <h4 className="mt-4 font-bold">– {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">⏳ Countdown to Next Trip</h2>
        <p className="text-lg mb-6">Trip to Goa starts in:</p>
        <div id="timer" className="text-4xl font-bold">⏱ 24 Days 13 Hours</div>
      </section>

      {/* Trip Video Embed */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">📽️ Watch Trip Highlights</h2>
        <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto">
          <iframe className="w-full h-full rounded-xl shadow-md" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Trip Video" allowFullScreen></iframe>
        </div>
      </section>

      {/* Join Now CTA */}
      <section className="py-16 px-4 bg-yellow-400 text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready for the Next Adventure?</h2>
        <p className="mb-6">Limited seats available. Reserve yours now!</p>
        <Link href="https://wa.me/919835742586" target="_blank" className="bg-black text-white py-3 px-6 rounded-full font-semibold">Chat &amp; Register</Link>
      </section>
    </main>
  );
        }
