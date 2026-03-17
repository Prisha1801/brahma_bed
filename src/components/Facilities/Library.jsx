import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { facilityHero } from "../common/data/heroData";

const Library = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const bulletPoints = [
        "2000+ books, journals, and periodicals",
        "Access to e-journals and digital resources",
        "Online databases and Engineering content",
        "Comfortable reading space for study"
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* HERO */}
            <HeroSection {...facilityHero} />

            <section ref={ref} className="py-16 px-6 sm:px-12 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center md:items-start border border-gray-100"
                >
                    {/* Image Area */}
                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg h-full max-h-80 xl:max-h-none">
                        <img
                            src="/images/library.webp"
                            alt="Library"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-amber-500 mb-3 tracking-wide">
                                    Empowering Academic & Personal Excellence
                                </h3>
                                <p className="text-gray-700 text-[15px] leading-relaxed font-medium">
                                    At Brahma Valley College of Engineering & Research Institute, we strive to provide a nurturing and resource-rich environment that enhances both academic and personal growth. Our facilities are designed to meet the modern standards of Engineering education.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-amber-500 mb-4">
                                    Library & Digital Learning
                                </h4>
                                <ul className="space-y-2.5">
                                    {bulletPoints.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-700 text-sm md:text-base font-medium">
                                            <span className="text-gray-900 font-black shrink-0">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Library;
