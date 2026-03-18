import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MdOutlineSchool } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="relative py-16 px-4 overflow-hidden bg-white">
            <div className="max-w-6xl mx-auto">

                {/* ── Heading ── */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wide mb-4">
                        About Us
                    </h2>
                    <div className="flex justify-center">
                        <MdOutlineSchool size={56} className="text-green-600" />
                    </div>
                </motion.div>

                {/* ── Two-column layout ── */}
                <div className="flex flex-col md:flex-row items-center gap-10">

                    {/* Image */}
                    <motion.div
                        className="w-full md:w-1/2 flex-shrink-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <img
                            src="/images/about.png"
                            alt="About Brahma Valley College"
                            className="w-full h-[320px] md:h-[380px] object-cover rounded-sm shadow-md"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed mb-6">
                            Brahma valley college of education (B.Ed.) aiming at imparting quality
                            education in a safe, natural environment that promotes discipline,
                            motivation and learning. Our motto is a constant reminder that
                            education is the most important instrument for the all round
                            development, transmission of culture and values from generation to
                            generation. Brahma valley college of education believes in creating not
                            only a successful person but also a fully cultured complete individual.
                            Towards this vision, we provide a nurturing atmosphere and a system
                            designed to develop a student teacher's personality.
                        </p>

                        <Link
                            to="/president-desk"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-6 py-3 rounded transition-colors duration-200"
                        >
                            Read More
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;