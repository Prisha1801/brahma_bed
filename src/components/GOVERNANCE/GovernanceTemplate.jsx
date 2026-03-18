import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { FaFilePdf, FaEye, FaDownload } from "react-icons/fa";

const GovernanceTemplate = ({ 
    heroData, 
    title, 
    description, 
    documents = []
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const openPdf = (path) => {
        window.open(path, "_blank");
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO */}
            <HeroSection {...heroData} />

            <section ref={ref} className="py-20 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0b2c4d] mb-4">
                                {title}
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
                                {description}
                            </p>
                            <div className="h-1.5 w-24 bg-[#0b2c4d] mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 p-6 md:p-10">
                            <h3 className="text-3xl font-black text-[#0b2c4d] mb-10 text-center uppercase tracking-wider">
                                Document Directory
                            </h3>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#0b2c4d] text-white">
                                            <th className="px-6 py-5 font-bold uppercase tracking-wider rounded-tl-2xl">Sr. No.</th>
                                            <th className="px-6 py-5 font-bold uppercase tracking-wider">Document Title</th>
                                            <th className="px-6 py-5 font-bold uppercase tracking-wider text-center">Action</th>
                                            <th className="px-6 py-5 font-bold uppercase tracking-wider text-center rounded-tr-2xl">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {documents.map((doc, index) => (
                                            <motion.tr 
                                                key={doc.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                                transition={{ delay: index * 0.1 }}
                                                className="group hover:bg-blue-50/50 transition-colors"
                                            >
                                                <td className="px-6 py-6 text-gray-700 font-medium">0{index + 1}</td>
                                                <td className="px-6 py-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 text-xl shrink-0">
                                                            <FaFilePdf />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                                                                {doc.title}
                                                            </h4>
                                                            <p className="text-sm text-gray-500 mt-0.5">{doc.description}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6 text-center">
                                                    <button 
                                                        onClick={() => openPdf(doc.pdfPath)}
                                                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border-2 border-[#0b2c4d] text-[#0b2c4d] font-bold rounded-xl hover:bg-[#0b2c4d] hover:text-white transition-all transform active:scale-95"
                                                    >
                                                        <FaEye />
                                                        View PDF
                                                    </button>
                                                </td>
                                                <td className="px-6 py-6 text-center">
                                                    <a 
                                                        href={doc.pdfPath} 
                                                        download 
                                                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0b2c4d] text-white font-bold rounded-xl hover:bg-[#154675] transition-all transform active:scale-95"
                                                    >
                                                        <FaDownload />
                                                        Download
                                                    </a>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="mt-8 text-center p-6 bg-slate-50 rounded-2xl border border-dashed border-gray-300">
                                <p className="text-gray-500 italic text-sm">
                                    Note: All documents are in PDF format. Please use a PDF viewer to read them.
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GovernanceTemplate;
