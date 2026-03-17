import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { vicePresidentHero } from '../common/data/heroData';
import VicePresidentImage from '/board-members/Dr.Dhanisha G. Pangavhane.png';

const VicePresident = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div className="bg-gray-100 pb-16">
            {/* HERO SECTION */}
            <HeroSection {...vicePresidentHero} />

            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto">

                    {/* Section Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-[#0b2c4d]">
                            Vice President Desk
                        </h2>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
                    >

                        {/* LEFT: Photo + Name */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="md:w-2/5 flex flex-col items-center bg-white px-6 pt-8 pb-8"
                        >
                            <img
                                src={VicePresidentImage}
                                alt="Dr. Dhanisha G. Pangavhane (Patil)"
                                className="w-full object-cover rounded-xl shadow-sm"
                                style={{ maxHeight: '420px', objectPosition: 'top' }}
                            />
                            <div className="text-center mt-5">
                                <h2 className="text-lg font-black text-gray-900">
                                    Dr. Dhanisha G Pangavhane (Patil)
                                </h2>
                                <p className="text-gray-700 font-semibold text-sm mt-0.5">
                                    Vice President
                                </p>
                                <p className="text-gray-500 text-sm mt-1">
                                    Nashik Gramin Shikshan Prasarak Mandal
                                </p>
                            </div>
                        </motion.div>

                        {/* RIGHT: Message */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="md:w-3/5 px-8 py-10 flex flex-col justify-center"
                        >
                            <h3 className="text-2xl font-black text-gray-900 mb-5">
                                Vice President Desk Message
                            </h3>

                            <div className="text-gray-700 text-base leading-relaxed space-y-4">
                                <p className="font-bold text-gray-900">
                                    I take great pleasure in welcoming you to the Nashik Gramin Shikshan
                                    Prasarak Mandal. We are committed to the holistic growth and development
                                    of every student, ensuring a strong foundation for a successful career.
                                </p>
                                <p>
                                    Our institutions are backed by a team of highly qualified, experienced,
                                    and dedicated faculty members. They not only deliver academic excellence
                                    but also mentor students in their overall personality and skill development.
                                </p>
                                <p>
                                    We believe that every student has unique potential, and it is our mission
                                    to nurture that potential with care, commitment, and competence. Our
                                    educational environment fosters independence, confidence, and leadership
                                    qualities.
                                </p>
                                <p>
                                    I am confident that the students who graduate from our institutions will
                                    emerge as responsible, capable, and future-ready individuals. We are here
                                    to support you in every step of your academic journey and personal growth.
                                </p>
                            </div>

                            <div className="mt-6">
                                <p className="font-bold text-gray-900">Best Wishes,</p>
                                <p className="font-bold text-gray-900">Dr. Dhanisha G Pangavhane (Patil)</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default VicePresident;