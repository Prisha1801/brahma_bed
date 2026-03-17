import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { generalSecretaryHero } from '../common/data/heroData';
import SecretaryImage from '/posters/secretary.jpeg';

const GeneralSecretary = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div className="bg-gray-100 pb-16">
            {/* HERO SECTION */}
            <HeroSection {...generalSecretaryHero} />

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
                            General Secretary's Message
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
                                src={SecretaryImage}
                                alt="Gaurav R. Pangavhane (Patil)"
                                className="w-full object-cover rounded-xl shadow-sm"
                                style={{ maxHeight: '400px', objectPosition: 'top' }}
                            />
                            <div className="text-center mt-5">
                                <h2 className="text-lg font-black text-gray-900">
                                    Gaurav R. Pangavhane (Patil)
                                </h2>
                                <p className="text-gray-700 font-semibold text-sm mt-0.5">
                                    General Secretary
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
                                From The General Secretary's Desk
                            </h3>

                            <div className="text-gray-700 text-base leading-relaxed space-y-4">
                                <p>Dear Students,</p>
                                <p>
                                    Welcome to NGSPM's Brahma Valley College of Education, Anjaneri, Nashik.
                                    We are proud to welcome you to our academic family. Over the past fifteen
                                    years, the college has achieved commendable progress in the field of education.
                                </p>
                                <p>
                                    Teachers and students are the lifeblood of any educational institution.
                                    Teachers, through their actions and values, leave a lasting impression on
                                    students. During your B.Ed. journey over the next two years, I am confident
                                    that you will experience high-quality, value-based education.
                                </p>
                                <p>
                                    Our college continues to emerge as a preferred institution due to its focus
                                    on research, co-curricular activities, sports, student development, and NSS.
                                    The growth in stature is the result of the dedicated efforts of our experienced
                                    faculty, committed staff, and visionary leadership.
                                </p>
                                <p>
                                    We take pride in being a hub of excellence, and I am pleased to extend my
                                    best wishes to all faculty members and students in their future academic and
                                    personal pursuits.
                                </p>
                            </div>

                            <div className="mt-6">
                                <p className="font-bold text-gray-900">Best Regards,</p>
                                <p className="font-bold text-gray-900">Gaurav R. Pangavhane (Patil)</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GeneralSecretary;