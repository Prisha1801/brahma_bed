import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { facilityHero } from "../common/data/heroData";

const Video = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const videos = [
        { id: 1, url: "https://www.youtube.com/embed/HsuhxIepv-A" },
        { id: 2, url: "https://www.youtube.com/embed/HsuhxIepv-A" },
        { id: 3, url: "https://www.youtube.com/embed/HsuhxIepv-A" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* HERO */}
            <HeroSection {...facilityHero} title="Welcome to Brahma Valley B.Ed College" />

            <section ref={ref} className="py-20 px-6 sm:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0b2c4d] mb-4">
                                Video Gallery
                            </h2>
                            <div className="h-1.5 w-24 bg-[#0b2c4d] mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videos.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative group bg-amber-500 p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="aspect-video relative overflow-hidden rounded-lg bg-black">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={video.url}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="w-full h-full"
                                        ></iframe>
                                    </div>
                                    <div className="h-4 bg-amber-500 mt-2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Video;
