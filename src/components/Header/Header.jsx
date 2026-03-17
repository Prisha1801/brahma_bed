import TopBar from './TopBar';
import InfoBar from './InfoBar';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Near top condition
      const nearTop = scrollY < 100;

      // Near footer condition
      const footer = document.querySelector('footer');
      const nearFooter = footer ? (scrollY + windowHeight >= footer.offsetTop) : false;

      // Hide buttons if near top or near footer
      setShouldHide(nearTop || nearFooter);
    };

    // Run once on mount to set initial state
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes shine {
          0% { transform: translateY(-100%) rotate(180deg); }
          100% { transform: translateY(200%) rotate(180deg); }
        }
        .shine-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -50%;
          width: 200%;
          height: 40%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: translateY(-100%) rotate(180deg);
          animation: shine 2.5s ease-in-out infinite;
        }
      `}</style>

      <div
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[40] flex flex-col gap-2 mr-2"
        style={{
          transform: shouldHide ? 'translateX(110%)' : 'translateX(0)',
          opacity: shouldHide ? 0 : 1,
          pointerEvents: shouldHide ? 'none' : 'auto',
          transition: 'transform 0.4s ease, opacity 0.4s ease'
        }}
      >
        <Link
          to="/"
          className="shine-btn relative bg-[#1e4d5c] text-white font-semibold text-sm shadow-lg hover:bg-[#163a46] transition-colors flex items-center justify-center overflow-hidden border-2 border-white"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            borderRadius: '999px',
            width: '38px',
            height: '180px',
            letterSpacing: '0.05em',
          }}
        >
          Enquire Now
        </Link>
        <a
          href="/pdf/Admission Form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="shine-btn relative bg-red-600 text-white font-semibold text-sm shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center overflow-hidden border-2 border-white"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            borderRadius: '999px',
            width: '38px',
            height: '180px',
            letterSpacing: '0.05em',
          }}
        >
          Admissions 2025-26
        </a>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <TopBar />
        <InfoBar />
      </div>
      <Navbar />
      <FloatingButtons />
    </>
  );
};

export default Header;