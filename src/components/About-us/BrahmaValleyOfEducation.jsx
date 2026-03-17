import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { brahmaValleyOfEducationHero } from '../common/data/heroData';

const BrahmaValleyOfEducation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...brahmaValleyOfEducationHero} />

            {/* ABOUT SECTION */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-black text-[#0b2c4d] text-center mb-10"
                    >
                        About Brahma Valley College of Education (B.Ed.)
                    </motion.h2>

                    {/* Paragraphs */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-700 text-base leading-relaxed space-y-5 text-justify"
                    >
                        <p>
                            Brahma Valley College of Education, established with the vision of empowering
                            future educators, is a premier institution dedicated to providing high-quality
                            teacher education. Situated in a serene and eco-friendly campus near
                            Trimbakeshwar, Nashik, the college is approved by the National Council for
                            Teacher Education (NCTE) and affiliated with Savitribai Phule Pune University.
                        </p>
                        <p>
                            The college offers a two-year Bachelor of Education (B.Ed.) program designed
                            to nurture competent, reflective, and socially responsible teachers. With a
                            blend of modern pedagogical practices and traditional values, the institution
                            emphasizes holistic development, academic excellence, and practical teaching
                            skills.
                        </p>
                        <p>
                            Brahma Valley B.Ed. College boasts a team of highly qualified and experienced
                            faculty members who mentor students through an inclusive and student-centered
                            learning environment. The college provides well-equipped infrastructure
                            including Smart Classrooms, Psychology and Science Labs, ICT Resources, and
                            an Extensive Library.
                        </p>
                        <p>
                            The institution actively engages students in community-based activities,
                            workshops, internships, and practice teaching in reputed schools, ensuring
                            real-world exposure and professional growth. Through a strong commitment to
                            educational excellence, Brahma Valley continues to shape future educators who
                            will inspire generations to come.
                        </p>
                    </motion.div>

                </div>
            </section>
        </>
    );
};

export default BrahmaValleyOfEducation;