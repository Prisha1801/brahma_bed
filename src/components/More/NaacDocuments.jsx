import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { facilityHero } from "../common/data/heroData";

const NaacDocuments = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const criteriaData = {
        "Criteria 1": ["1.1.1", "1.1.2", "1.1.3", "1.2.1", "1.2.2 & 1.2.3", "1.2.4", "1.2.5", "1.3.1", "1.3.2", "1.3.3", "1.4.1", "1.4.2"],
        "Criteria 2": ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7"],
        "Criteria 3": ["3.1", "3.2", "3.3", "3.4"],
        "Criteria 4": ["4.1", "4.2", "4.3", "4.4"],
        "Criteria 5": ["5.1", "5.2", "5.3", "5.4"],
        "Criteria 6": ["6.1", "6.2", "6.3", "6.3.1", "6.3.2", "6.3.4", "6.3.4.1", "6.4.1", "6.5.1", "6.5.2", "6.5.3", "6.5.3.1", "6.5.4"],
        "Criteria 7": ["7.1", "7.2", "7.3"]
    };

    const maxLength = Math.max(...Object.values(criteriaData).map(arr => arr.length));
    const columns = Object.keys(criteriaData);

    const pdfLink = "/pdf/pdf1.pdf";

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* HERO */}
            <HeroSection {...facilityHero} title="Welcome to Brahma Valley B.Ed College" />

            <section ref={ref} className="py-20 px-4 md:px-10">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0b2c4d] mb-4">
                                Criteria Links Table
                            </h2>
                            <div className="h-1.5 w-24 bg-[#0b2c4d] mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-center border-collapse table-fixed min-w-[1000px]">
                                    <thead>
                                        <tr className="bg-[#dbeafe] text-[#0b2c4d]">
                                            {columns.map((col, i) => (
                                                <th key={i} className="px-4 py-4 font-bold border-r border-gray-300 last:border-r-0">
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[...Array(maxLength)].map((_, rowIndex) => (
                                            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'} hover:bg-slate-50 transition-colors`}>
                                                {columns.map((col, colIndex) => (
                                                    <td key={colIndex} className="px-4 py-3 text-sm font-medium border-r border-gray-200 last:border-r-0">
                                                        {criteriaData[col][rowIndex] ? (
                                                            <a 
                                                                href={pdfLink} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 hover:text-blue-800 transition-colors"
                                                            >
                                                                {criteriaData[col][rowIndex]}
                                                            </a>
                                                        ) : (
                                                            <span className="text-transparent">.</span>
                                                        )}
                                                    </td>
                                                ))}
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

export default NaacDocuments;
