import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { committeesHero } from "../common/data/heroData";

const CommitteeTable = ({ data }) => (
    <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
            <thead>
                <tr className="bg-[#0b2c4d] text-white">
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Sr. No.</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Committee Name</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Chairman</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Secretary</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Members</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {data.length > 0 ? (
                    data.map((row, i) => (
                        <tr
                            key={i}
                            className={i % 2 === 0 ? "bg-white hover:bg-gray-50 transition-colors" : "bg-gray-50 hover:bg-gray-100 transition-colors"}
                        >
                            <td className="px-4 py-4 text-gray-700 align-top">{row.srNo}</td>
                            <td className="px-4 py-4 text-gray-900 font-medium align-top">{row.name}</td>
                            <td className="px-4 py-4 text-gray-700 align-top">{row.chairman}</td>
                            <td className="px-4 py-4 text-gray-700 align-top">{row.secretary}</td>
                            <td className="px-4 py-4 text-gray-700 align-top">{row.members}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5} className="px-4 py-12 text-center text-gray-400 italic">
                            No records found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);

const Commettiee = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO */}
            <HeroSection {...committeesHero} />

            <section ref={ref} className="py-20 px-6 sm:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0b2c4d] mb-4">
                                Institutional Committees
                            </h2>
                            <div className="h-1.5 w-24 bg-[#0b2c4d] mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                            <CommitteeTable data={committeesHero.data || []} />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Commettiee;
