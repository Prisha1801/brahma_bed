import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { missionHero } from "../common/data/heroData";
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiEyeFill } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";

const cards = [
  {
    icon: <FaHandHoldingHeart className="text-red-600" size={48} />,
    title: "Our Belief",
    text: "Brahma Valley College of Education offers a two-year B.Ed. program focused on academic excellence and holistic growth. With experienced faculty, modern facilities, and hands-on training, we shape future educators to inspire and lead in classrooms.",
  },
  {
    icon: <RiEyeFill className="text-red-600" size={48} />,
    title: "Our Vision",
    text: "To be a center of excellence in teacher education, empowering aspiring educators with knowledge, skills, and values to create a positive impact in schools and society.",
  },
  {
    icon: <TbTargetArrow className="text-red-600" size={48} />,
    title: "Our Mission",
    text: "To prepare skilled, ethical, and innovative teachers through quality education, practical training, and value-based learning.",
  },
];

const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* HERO */}
      <HeroSection {...missionHero} />

      {/* CARDS SECTION */}
      <section ref={ref} className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm px-8 py-10 flex flex-col items-center text-center"
            >
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-7">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MissionVision;