"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DomesticTripPage() {
  const trips = [
    {
      title: "Manali Adventure",
      img: "/trips/manali.jpg",
      desc: "3 nights, 4 days with full Himalayan adventure and snowfall experience.",
      price: "₹12,999",
    },
    {
      title: "Goa Chillout",
      img: "/trips/goa.jpg",
      desc: "Beach vibes, water sports, and unforgettable parties.",
      price: "₹9,499",
    },
    {
      title: "Rajasthan Royal",
      img: "/trips/rajasthan.jpg",
      desc: "Explore forts, camel safari, and local heritage.",
      price: "₹10,799",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/trips/hero.jpg"
          alt="Domestic Trip Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl font-bold text-center"
          >
            Explore India with Growsence 🌏
          </motion.h1>
        </div>
      </div>

      {/* Trip Cards */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trips.map((trip, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-white shadow-md overflow-hidden"
            >
              <Image src={trip.img} alt={trip.title} width={500} height={300} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                <p className="text-sm mb-3">{trip.desc}</p>
                <p className="font-bold text-blue-600 mb-3">{trip.price}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">Book Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-blue-50 py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Why Travel with Growsence?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["🏨", "Top Hotels", "Stay in hand-picked premium properties."],
            ["🚌", "Comfort Travel", "A/C travel with experienced coordinators."],
            ["🍽️", "Meals Included", "Enjoy hygienic and tasty food."],
            ["📞", "24/7 Support", "On-trip help and assistance anytime."],
          ].map(([icon, title, desc], i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
        <p className="text-gray-600 mb-6">Book your adventure with Growsence today.</p>
        <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-full text-lg shadow hover:scale-105 transition">
          Contact Now
        </button>
      </section>
    </div>
  );
}