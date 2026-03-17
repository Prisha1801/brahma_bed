import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { awardReceivedHero } from "../common/data/heroData";

const AwardReceived = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const awards = [
        { id: 1, name: "test", year: "" },
        { id: 2, name: "test2", year: "2025" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <HeroSection {...awardReceivedHero} />

            <section ref={ref} className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0b2c4d] mb-4">
                                Awards Received
                            </h2>
                            <div className="h-1.5 w-24 bg-[#0b2c4d] mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#1a202c] text-white">
                                            <th className="px-6 py-4 font-bold border-r border-gray-700 w-24 text-center">#</th>
                                            <th className="px-6 py-4 font-bold border-r border-gray-700">Award Name</th>
                                            <th className="px-6 py-4 font-bold w-48 text-center">Year</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {awards.map((award, index) => (
                                            <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 text-gray-700 font-medium border-r border-gray-100 text-center">{award.id}</td>
                                                <td className="px-6 py-4 text-gray-800 border-r border-gray-100">{award.name}</td>
                                                <td className="px-6 py-4 text-gray-700 text-center">{award.year}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AwardReceived;
