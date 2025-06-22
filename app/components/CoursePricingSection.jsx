'use client';
import { motion } from "framer-motion";

export default function CoursePricingSection() {
  const plans = [
    {
      title: "Basic Package",
      price: "₹1499",
      amount: 1499,
      features: [
        "📢 Spoken English",
        "📈 Affiliate Marketing",
        "🔍 Lead Generation",
        "🗣️ Communication Skills",
        "🎬 Video Editing",
      ],
      recommended: false,
    },
    {
      title: "Pro Package",
      price: "₹2999",
      amount: 2999,
      features: [
        "📊 Share Market Expert",
        "🎨 Graphic Design",
        "💸 Millionaire Mindset",
        "📺 YouTube, FB, Insta Marketing",
        "📲 WhatsApp Marketing",
      ],
      recommended: true,
    },
  ];

  const handlePayment = async (amount) => {
  try {
    const res = await fetch("/api/create-payment-session", {
      method: "POST",
      body: JSON.stringify({
        name: "Growsence Student",
        email: "student@email.com",
        phone: "9876543210",
        amount,
      }),
    });

    const data = await res.json();
    if (data.payment_link) {
      window.location.href = data.payment_link;
    } else {
      alert("Payment failed: " + data.error);
    }
  } catch (error) {
    console.error("Payment error:", error);
    alert("Something went wrong during payment");
  }
};

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4" id="pricing">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
        >
          🎓 Choose Your Plan
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className={`relative rounded-3xl p-8 shadow-xl border transition duration-300 ${
                plan.recommended
                  ? "bg-gradient-to-br from-yellow-200 to-yellow-100 border-yellow-400"
                  : "bg-white border-gray-200"
              }`}
            >
              {plan.recommended && (
                <span className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs">
                  ⭐ Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.title}</h3>
              <p className="text-3xl font-extrabold text-blue-700 mb-6">{plan.price}</p>
              <ul className="text-left space-y-3 text-gray-700">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✅ {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePayment(plan.amount)}
                className="mt-6 w-full bg-blue-700 text-white py-3 rounded-full hover:bg-blue-800 transition duration-300 shadow-md font-semibold text-lg"
              >
                Start Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}