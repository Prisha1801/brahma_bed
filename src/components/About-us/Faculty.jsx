import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { facultyHero } from "../common/data/heroData";

const teachingFaculty = [
    // { srNo: 1, name: "", qualification: "", designation: "", experience: "" },
];

const nonTeachingFaculty = [
    // { srNo: 1, name: "", qualification: "", designation: "", experience: "" },
];

const FacultyTable = ({ data }) => (
    <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
            <thead>
                <tr className="bg-[#0b2c4d] text-white">
                    <th className="px-4 py-3 font-semibold">Sr. No.</th>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Qualification</th>
                    <th className="px-4 py-3 font-semibold">Designation</th>
                    <th className="px-4 py-3 font-semibold">Experience</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((row, i) => (
                        <tr
                            key={i}
                            className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                            <td className="px-4 py-3 text-gray-700">{row.srNo}</td>
                            <td className="px-4 py-3 text-gray-700">{row.name}</td>
                            <td className="px-4 py-3 text-gray-700">{row.qualification}</td>
                            <td className="px-4 py-3 text-gray-700">{row.designation}</td>
                            <td className="px-4 py-3 text-gray-700">{row.experience}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5} className="px-4 py-8 text-center text-gray-400 italic">
                            No records found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);

const Faculty = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO */}
            <HeroSection {...facultyHero} />

            <section ref={ref} className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto space-y-16">

                    {/* TEACHING FACULTY */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-3xl font-black text-[#0b2c4d] text-center mb-8">
                            Teaching Faculty
                        </h2>
                        <div className="rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                            <FacultyTable data={teachingFaculty} />
                        </div>
                    </motion.div>

                    {/* NON-TEACHING FACULTY */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-50 rounded-2xl px-6 py-10"
                    >
                        <h2 className="text-3xl font-black text-[#0b2c4d] text-center mb-8">
                            Non-Teaching Faculty
                        </h2>
                        <div className="rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                            <FacultyTable data={nonTeachingFaculty} />
                        </div>
                    </motion.div>

                </div>
            </section>
        </>
    );
};

export default Faculty;