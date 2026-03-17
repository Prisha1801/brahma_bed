import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { requiredDocumentsHero } from "../common/data/heroData";

const RequiredDocuments = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const documents = [];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* HERO */}
            <HeroSection {...requiredDocumentsHero} />

            <section ref={ref} className="py-20 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2563eb] mb-4 flex items-center justify-center gap-3">
                                📑 Required Documents
                            </h2>
                            <div className="h-1.5 w-24 bg-[#2563eb] mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#1a202c] text-white">
                                            <th className="px-6 py-4 font-bold border-r border-gray-700 w-24 text-center">#</th>
                                            <th className="px-6 py-4 font-bold text-center">Document Name</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {documents.length > 0 ? (
                                            documents.map((doc, index) => (
                                                <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-6 py-4 text-gray-700 font-medium border-r border-gray-100 text-center">{index + 1}</td>
                                                    <td className="px-6 py-4 text-gray-800">{doc}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="2" className="px-6 py-10 text-center text-gray-500 font-medium italic">
                                                    No documents found.
                                                </td>
                                            </tr>
                                        )}
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

export default RequiredDocuments;
