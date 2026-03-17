import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { approvalsAffiliationHero } from "../common/data/heroData";
import { FaChevronDown } from "react-icons/fa";

const AccordionItem = ({ title, items, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="mb-6 rounded-2xl overflow-hidden border border-blue-100 shadow-sm bg-white">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-8 py-5 bg-blue-50/50 hover:bg-blue-100/50 transition-colors"
            >
                <h3 className="text-xl font-bold text-[#0b2c4d] tracking-wide">
                    {title}
                </h3>
                <FaChevronDown className={`text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <ul className="px-8 py-8 space-y-4 bg-white">
                            {items.map((item, index) => (
                                <li key={index} className="text-gray-700 text-lg font-medium p-4 bg-slate-50 rounded-xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-sm transition-all flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    {item}
                                </li>
                            ))}
                            {items.length === 0 && (
                                <li className="text-gray-400 italic text-center py-4">No records found.</li>
                            )}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ApprovalsAffiliation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const approvals = ["test2"];
    const affiliations = ["test2"];

    return (
        <div className="bg-slate-50 min-h-screen">
            <HeroSection {...approvalsAffiliationHero} />

            <section ref={ref} className="py-20 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0b2c4d] mb-4">
                                Approvals & Affiliation
                            </h2>
                            <div className="h-1.5 w-24 bg-[#0b2c4d] mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100">
                           <AccordionItem title="Approvals" items={approvals} defaultOpen={true} />
                           <AccordionItem title="Affliation" items={affiliations} defaultOpen={true} />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ApprovalsAffiliation;
