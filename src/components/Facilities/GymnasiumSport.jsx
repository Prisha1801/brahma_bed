import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { facilityHero } from "../common/data/heroData";

const GymnasiumSport = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

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
                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                        <img 
                            src="/images/sports.png" 
                            alt="Gymnasiums & Sports" 
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                        />
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center py-4">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#0b2c4d] tracking-tight">
                                Gymnasiums & Sports Facilities
                            </h3>
                            <p className="text-gray-700 text-[15px] md:text-base leading-relaxed font-medium">
                                Our B.Ed College provides excellent gymnasium and sports facilities to promote physical fitness and holistic development. The gym is equipped with cardio and strength-training machines along with space for yoga and aerobics. Students can participate in outdoor games like cricket, football, volleyball, kho-kho, and athletics, as well as indoor games such as badminton, table tennis, chess, and carrom. Regular physical education sessions, yoga camps, and annual sports meets encourage teamwork, discipline, and overall well-being, shaping future educators into healthy and confident individuals.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default GymnasiumSport;
