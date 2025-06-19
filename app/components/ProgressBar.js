'use client';
import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className="h-1 bg-blue-500 transition-all duration-200"
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
}