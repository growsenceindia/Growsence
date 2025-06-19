'use client';
import HeroSection from './components/HeroSection';
import CourseSection from './components/CourseSection';
import CertificateSection from './components/CertificateSection';
import CareSenseSection from './components/CareSenseSection';
import GrowthZoneSection from './components/GrowthZoneSection';
import XPLeaderboardSection from './components/XPLeaderboardSection';
import TrustRefundSection from './components/TrustRefundSection';
import FestivalBonusSection from './components/FestivalBonusSection';
import HowItWorksSection from './components/HowItWorksSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import AboutSection from "./components/AboutSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import { FaWhatsapp } from 'react-icons/fa'
export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CourseSection />
      <CertificateSection />
      <CareSenseSection />
      <GrowthZoneSection />
      <XPLeaderboardSection />
      <TrustRefundSection />
      <FestivalBonusSection />
      <HowItWorksSection />
      <ContactSection />
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