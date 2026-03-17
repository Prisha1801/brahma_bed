import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { scholarshipHero } from "../common/data/heroData";

const Scholarship = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const scholarshipData = [
        { id: 1, type: "scholarship5", link: "/pdf/pdf1.pdf" },
        { id: 2, type: "pdf 2", link: "/pdf/pdf2.pdf" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* HERO */}
            <HeroSection {...scholarshipHero} />

            <section ref={ref} className="py-20 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2563eb] mb-4">
                                Scholarship
                            </h2>
                            <div className="h-1.5 w-24 bg-[#2563eb] mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#1a202c] text-white">
                                            <th className="px-6 py-4 font-bold border-r border-gray-700 w-24 text-center">#</th>
                                            <th className="px-6 py-4 font-bold border-r border-gray-700">Scholarship Type</th>
                                            <th className="px-6 py-4 font-bold text-center">Scholarship Info</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {scholarshipData.map((item, index) => (
                                            <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 text-gray-700 font-medium border-r border-gray-100 text-center">{item.id}</td>
                                                <td className="px-6 py-4 text-gray-800 border-r border-gray-100">{item.type}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                                                    >
                                                        View PDF
                                                    </a>
                                                </td>
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

export default Scholarship;
