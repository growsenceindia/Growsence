'use client';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FooterSection from './components/FooterSection';
import AboutSection from "./components/AboutSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StatsCounterSection from "./components/StatsCounterSection";
import ScrollProgressBar from "./components/ScrollProgressBar";
import FAQSection from "./components/FAQSection";
import CourseSlider from "./components/CourseSlider";
import LegalCertificatesSection from "./components/LegalCertificatesSection";
import CoursePricingSection from "./components/CoursePricingSection";
import Navbar from "./components/Navbar";
import { FaWhatsapp } from 'react-icons/fa'
export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Navbar />
      <ScrollProgressBar />
      <CourseSlider />
      <HeroSection />
      <AboutSection />
      <StatsCounterSection />
      <CoursePricingSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <LegalCertificatesSection />
      <FAQSection />
      <FooterSection />
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919835742586"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </main>
  );
}