"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Growsence?",
    a: "growsence is an online platform offering digital courses and skill-based training to help individuals learn and grow in today’s fast-changing world."
  },
  {
    q: "How can I earn with Growsence?",
    a: "You can earn by referring others through our affiliate program or by utilizing the skills learned to freelance or start your own work."
  },
  {
    q: "Are there any hidden charges?",
    a: "No, Growsence is transparent. You pay once for a course package and get lifetime access with updates."
  },
  {
    q: "How do I get my certificate?",
    a: "Once you complete a course, pass the test, and submit your details, your certificate (including NFT) will be auto-generated."
  },
  
  {
    q: "What payment methods do you accept?",
    a: "We accept various payment methods, including major credit cards, debit cards, and online payment platforms. Simply choose your preferred payment method during the checkout process."
  },
  {
    q: "Can I contact support if I have questions or issues?",
    a: "Absolutely! We have a dedicated support team ready to assist you. If you have any questions, technical difficulties, or require assistance, you can reach out to our support team through the contact information provided on our website"
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}