import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { governmentPermissionHero } from "../common/data/heroData";

const GovernmentPermissions = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const permissions = [
        "Bank",
        // Add more permissions here as they become available
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO */}
            <HeroSection {...governmentPermissionHero} />

            <section ref={ref} className="py-20 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0b2c4d] mb-4">
                                Government Permissions
                            </h2>
                            <div className="h-1.5 w-24 bg-[#0b2c4d] mx-auto rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
                            {permissions.length > 0 ? (
                                <ul className="space-y-4">
                                    {permissions.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-4 text-lg text-gray-700 font-medium p-4 bg-slate-50 rounded-xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all"
                                        >
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#0b2c4d]"></div>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-400 italic text-lg">
                                        No permissions currently listed.
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GovernmentPermissions;
