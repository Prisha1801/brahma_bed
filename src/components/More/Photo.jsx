import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { facilityHero } from "../common/data/heroData";

const images = [
    "/gallery/g1.avif",
    "/gallery/g2.avif",
    "/gallery/g3.avif",
    "/gallery/g4.avif",
    "/gallery/g5.avif",
    "/gallery/g6.avif",
];

const Photo = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO */}
            <HeroSection
                {...facilityHero}
                title="Welcome to Brahma Valley B.Ed College"
            />

            {/* GALLERY */}
            <section ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800">
                        Photo Gallery
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Moments from our campus
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
                        >
                            <img
                                src={src}
                                alt={`gallery-${index}`}
                                className="w-full h-64 object-cover hover:scale-110 transition duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Photo;