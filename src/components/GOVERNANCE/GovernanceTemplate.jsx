import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { FaDownload } from "react-icons/fa";

const GovernanceTemplate = ({ 
    heroData, 
    title, 
    description, 
    members = [], 
    downloadButtonText, 
    pdfPath = "/pdf/pdf1.pdf" 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO */}
            <HeroSection {...heroData} title="Welcome to Brahma Valley B Ed College" />

            <section ref={ref} className="py-20 px-6 sm:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0b2c4d] mb-4">
                                {title}
                            </h2>
                            <p className="text-gray-600 text-lg max-w-6xl mx-auto leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-100 mb-12">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-white text-gray-800 border-b border-gray-200">
                                            <th className="px-6 py-4 font-bold border-r border-gray-100 w-32 text-center uppercase tracking-wider text-sm">Sr. No.</th>
                                            <th className="px-6 py-4 font-bold border-r border-gray-100 uppercase tracking-wider text-sm">Name of the Member</th>
                                            <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">Designation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {members.length > 0 ? (
                                            members.map((member, index) => (
                                                <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-6 py-4 text-gray-700 font-medium border-r border-gray-100 text-center">{index + 1}</td>
                                                    <td className="px-6 py-4 text-gray-800 border-r border-gray-100">{member.name}</td>
                                                    <td className="px-6 py-4 text-gray-800">{member.designation}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="px-6 py-6 text-center text-gray-600 font-medium">
                                                    No members found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <a
                                href={pdfPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#007bff] text-white font-bold rounded shadow-lg hover:bg-blue-600 transition-all duration-300"
                            >
                                <FaDownload /> {downloadButtonText}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GovernanceTemplate;
