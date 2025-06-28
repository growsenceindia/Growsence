import React, { useState, useEffect } from "react";

const bonusHistory = [
  {
    year: 2021,
    name: "Diwali Dhamaka",
    bonus: "Free Personal Branding Course + ₹500 Cashback",
    img: "/bonus/diwali.png",
    claimed: 320,
  },
  {
    year: 2022,
    name: "Holi Splash",
    bonus: "Lead Generation Toolkit + 1:1 Mentorship Call",
    img: "/bonus/holi.png",
    claimed: 410,
  },
  {
    year: 2023,
    name: "New Year Growth Pack",
    bonus: "Exclusive E-Book + Pro Tools Access",
    img: "/bonus/newyear.png",
    claimed: 525,
  },
];

const winners = [
  {
    name: "Rahul Sharma",
    year: 2022,
    img: "/winners/2022_rahul.jpg",
    quote: "Holi bonus se mujhe mentorship call mili, growth boost hua!",
  },
  {
    name: "Sneha Patel",
    year: 2023,
    img: "/winners/2023_sneha.jpg",
    quote: "E-book aur tools ne meri earning double kar di!",
  },
];

const testimonials = [
  {
    name: "Amit Verma",
    img: "/users/amit.jpg",
    text: "Festival bonus ka wait har saal rehta hai. Growsence ne mujhe har बार surprise किया!",
  },
  {
    name: "Priya Singh",
    img: "/users/priya.jpg",
    text: "Real rewards, instant claim, aur support best hai.",
  },
];

export default function FestivalBonusPage() {
  // Countdown logic
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const end = new Date("2025-07-05T23:59:59").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = end - now;
      setTimeLeft({
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        mins: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
        secs: Math.max(0, Math.floor((diff / 1000) % 60)),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Confetti animation on claim (simple emoji burst)
  const [showConfetti, setShowConfetti] = useState(false);
  const handleClaim = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
    alert("Congratulations! Your festival bonus has been claimed.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 py-8 px-2 md:px-0">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-2">
          🎉 Festival Bonus Carnival
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          हर साल, Growsence परिवार को exclusive बोनस और रिवॉर्ड्स मिलते हैं!  
          <span className="block font-semibold text-pink-600">Claim your 2025 Festival Bonus now!</span>
        </p>
        <div className="flex justify-center gap-2 text-xl font-mono mb-2">
          <span>{timeLeft.days}d</span>:
          <span>{timeLeft.hours}h</span>:
          <span>{timeLeft.mins}m</span>:
          <span>{timeLeft.secs}s</span>
        </div>
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-lg font-semibold shadow-lg transition-all"
          onClick={handleClaim}
        >
          Claim Bonus
        </button>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none flex justify-center items-center z-50 text-5xl animate-bounce">
            🎊🎉✨🥳🎁
          </div>
        )}
      </div>

      {/* Bonus Timeline (Legacy Feel) */}
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-pink-700 mb-4 text-center">Our Festival Bonus Legacy</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {bonusHistory.map((bonus) => (
            <div
              key={bonus.year}
              className="bg-white/80 rounded-xl shadow-md p-4 flex-1 flex flex-col items-center border border-pink-100"
            >
              <img src={bonus.img} alt={bonus.name} className="w-20 h-20 object-contain mb-2" />
              <div className="text-lg font-semibold text-pink-600">{bonus.name} ({bonus.year})</div>
              <div className="text-gray-700 mb-2 text-center">{bonus.bonus}</div>
              <div className="text-xs text-gray-500">{bonus.claimed}+ claimed</div>
            </div>
          ))}
        </div>
      </div>

      {/* Winners Carousel */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-bold text-pink-700 mb-2 text-center">Past Winners</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {winners.map((w) => (
            <div
              key={w.name}
              className="bg-pink-50 rounded-lg shadow p-4 min-w-[200px] flex flex-col items-center"
            >
              <img src={w.img} alt={w.name} className="w-16 h-16 rounded-full mb-2" />
              <div className="font-semibold">{w.name}</div>
              <div className="text-xs text-gray-500 mb-1">{w.year} Winner</div>
              <div className="text-sm text-pink-700 italic text-center">“{w.quote}”</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-2xl mx-auto mb-10">
        <h2 className="text-xl font-bold text-pink-700 mb-2 text-center">Student Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-lg shadow p-4 flex gap-3 items-center">
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-semibold text-pink-600">{t.name}</div>
                <div className="text-sm text-gray-700">{t.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ + Social + Legal */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-bold text-pink-700 mb-2">FAQ</h2>
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="font-semibold mb-1">Q: Bonus kaise claim karein?</div>
          <div className="text-gray-700 mb-2">Claim Bonus बटन दबाएं, ऑफर आपके अकाउंट में जुड़ जाएगा।</div>
          <div className="font-semibold mb-1">Q: कौन-कौन claim कर सकता है?</div>
          <div className="text-gray-700 mb-2">सभी active students, सिर्फ एक बार per festival।</div>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <a href="https://wa.me/919835742586" target="_blank" rel="noopener" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">WhatsApp Support</a>
          <a href="https://www.instagram.com/growsenceindia" target="_blank" rel="noopener" className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg">Instagram</a>
        </div>
        <div className="text-xs text-gray-500 text-center mt-4">
          *Terms & Conditions apply. Bonus non-transferable. GST/MSME registered since 2021.
        </div>
      </div>
    </div>
  );
}
