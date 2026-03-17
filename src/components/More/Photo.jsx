import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { facilityHero } from "../common/data/heroData";

const Photo = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO */}
            <HeroSection {...facilityHero} title="Welcome to Brahma Valley B.Ed College" />

            <section ref={ref} className="py-24 px-6 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gray-500 text-xl font-medium text-center italic tracking-wide">
                        Photo gallery will be updated soon.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default Photo;
