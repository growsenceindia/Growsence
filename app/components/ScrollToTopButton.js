'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition z-50"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  ) : null;
}