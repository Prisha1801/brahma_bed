import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { presidentDeskHero } from '../common/data/heroData';
import PresidentImage from '/posters/president.png';

const PresidentDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...presidentDeskHero} />

            {/* PRESIDENT SECTION */}
            <section className="bg-gray-100 min-h-screen py-16 px-4">
                <div className="max-w-5xl mx-auto">

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
                                src={PresidentImage}
                                alt="Rajaram D. Pangavhane (Patil)"
                                className="w-full object-cover rounded-xl shadow-sm"
                                style={{ maxHeight: '400px', objectPosition: 'top' }}
                            />
                            <div className="text-center mt-5">
                                <h2 className="text-lg font-black text-gray-900">
                                    Rajaram D. Pangavhane (Patil)
                                </h2>
                                <p className="text-gray-700 font-semibold text-sm mt-0.5">
                                    Founder President
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
                                From The President's Desk
                            </h3>

                            <div className="text-gray-700 text-base leading-relaxed space-y-4">
                                <p>
                                    Brahma Valley College of Education (B.Ed.) is committed to imparting
                                    quality education in a safe and natural environment that fosters
                                    discipline, motivation, and lifelong learning.
                                </p>
                                <p>
                                    Our motto stands as a reminder that education is the most vital
                                    instrument for all-round development and for passing on culture and
                                    values through generations. At Brahma Valley, we aspire not just to
                                    shape successful professionals, but to nurture well-rounded, cultured
                                    individuals.
                                </p>
                                <p>
                                    With this vision, we have created a nurturing environment and a
                                    systematic approach to enhance the holistic personality of every
                                    student-teacher. We believe education should develop both competence
                                    and character.
                                </p>
                            </div>

                            <div className="mt-6">
                                <p className="font-bold text-gray-900">Best Regards,</p>
                                <p className="font-bold text-gray-900">Rajaram D. Pangavhane (Patil)</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default PresidentDesk;