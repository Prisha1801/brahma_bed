import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { MdOutlineSchool, MdOutlineTableChart, MdOutlineCode, MdOutlinePeople } from 'react-icons/md';

const images = [
  "/banners/b1.jpg",
  "/banners/b2.png",
];

const infoCards = [
  { icon: <MdOutlineSchool size={30} />, label: "Programme Name", value: "B. Pharmacy", number: null },
  { icon: <MdOutlineTableChart size={30} />, label: "Choice Code", value: "520282310", number: "123" },
  { icon: <MdOutlineCode size={30} />, label: "DTE Code", value: "5202", number: null },
  { icon: <MdOutlinePeople size={30} />, label: "Intake", value: "60", number: null },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative w-full">

      {/* ── Carousel ── */}
      <div className="relative w-full overflow-hidden h-[220px] sm:h-[350px] md:h-[420px] lg:h-[520px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={images[current]}
            alt={`Banner ${current + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover sm:object-cover"
          />
        </AnimatePresence>

        {/* Prev Arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-1 transition-colors"
          aria-label="Previous"
        >
          <MdChevronLeft size={36} />
        </button>

        {/* Next Arrow */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-1 transition-colors"
          aria-label="Next"
        >
          <MdChevronRight size={36} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Spacer so page content doesn't sit behind cards */}
      <div className="pb-4 sm:pb-10" />
    </div>
  );
};

export default Banner;