import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { salientFeaturesHero } from "../common/data/heroData";

const features = [
    "Disciplined environment, professional work culture for quality education.",
    "Well-equipped computer lab with internet.",
    "Enriched library with all types of books, periodicals, journals, magazines, newspapers, etc.",
    "Personal attention towards the progress of the students.",
    "Expert lectures, seminars, workshops for the all-round development of students.",
    "Inculcation of life skills and soft skills.",
    "Implementation of programmes under Students Development Board and Bahishal Department of Savitribai Phule Pune University, Pune.",
    "Organize workshops and give guidance for Teachers Eligibility Test (TET) and Teachers Aptitude and Intelligence Test (TAIT).",
    "Teacher guidance scheme for individual attention.",
    "Excellent academic result.",
    "Educational technology lab and advanced language lab.",
    "Qualified and experienced staff.",
    "Audio-video facilities for effective teaching-learning process.",
    "Opportunity for campus interview through Training & Placement Cell.",
];

const SalientFeatures = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO */}
            <HeroSection {...salientFeaturesHero} />

            {/* SALIENT FEATURES SECTION */}
            <section className="bg-gray-100 py-16 px-6">
                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-black text-[#0b2c4d] text-center mb-10"
                    >
                        Salient Features
                    </motion.h2>

                    {/* Card */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-sm px-8 py-10"
                    >
                        <ul className="space-y-3">
                            {features.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
                                    className="flex items-start gap-3 text-gray-700 text-base leading-7"
                                >
                                    <span className="mt-2 w-2 h-2 rounded-full bg-gray-700 flex-shrink-0" />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </section>
        </>
    );
};

export default SalientFeatures;