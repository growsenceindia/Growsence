'use client';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import CourseSlider from './components/CourseSlider';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsCounterSection from './components/StatsCounterSection';
import CoursePricingSection from './components/CoursePricingSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import LegalCertificatesSection from './components/LegalCertificatesSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Top Navbar */}
      <Navbar />

      {/* Scroll Progress */}
      <ScrollProgressBar />

      {/* Course Slider */}
      <CourseSlider />

      {/* Hero Section */}
      <HeroSection />

      {/* About Growsence */}
      <AboutSection />

      {/* Stats Section */}
      <StatsCounterSection />

      {/* Course Pricing */}
      <CoursePricingSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Legal Certificates */}
      <LegalCertificatesSection />

      {/* FAQs */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />

      {/* Floating WhatsApp Button */}
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
