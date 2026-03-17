import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { principalDeskHero } from '../common/data/heroData';

const PrincipalDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...principalDeskHero} />

            {/* PRINCIPAL DESK */}
            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-5xl mx-auto">

                    {/* Card */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
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
                                src="/images/principal.jpg"
                                alt="Dr. Vinod R. Raut"
                                className="w-full object-cover rounded-xl shadow-sm"
                                style={{ maxHeight: '420px', objectPosition: 'top' }}
                            />
                            <div className="text-center mt-5">
                                <h2 className="text-lg font-black text-gray-900">
                                    Dr. Vinod R. Raut
                                </h2>
                                <p className="text-gray-700 font-semibold text-sm mt-0.5">
                                    Principal
                                </p>
                                <p className="text-gray-500 text-sm mt-1 uppercase tracking-wide">
                                    Brahma Valley Educational Campus, Nashik
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
                            <h3 className="text-2xl font-black text-gray-900 mb-4">
                                From The Principal's Desk
                            </h3>

                            <div className="text-gray-700 text-base leading-relaxed space-y-4 text-justify">
                                <p className="font-bold text-gray-900">Respected Parents and Dear Students,</p>
                                <p>
                                    It is with great pleasure that I welcome you to our college website. Since 2006,
                                    our institution has been imparting quality education in the tribal area of Nashik
                                    District. Nashik Gramin Shikshan Prasarak Mandal's Brahma Valley College of
                                    Education is a vibrant educational community of exemplary standards with a
                                    commitment to quality education and a rigorous academic environment.
                                </p>
                                <p>
                                    Our Teacher Training Institute aims to enhance the quality of education and
                                    empower our teachers. We believe that well-trained and motivated teachers are
                                    the cornerstone of a successful institution, and this initiative reflects our
                                    commitment to providing the best learning experience for our students.
                                </p>
                                <p>
                                    The institute offers training programs and workshops focused on modern teaching
                                    methodologies, classroom management, and educational technologies. Conducted by
                                    experienced educators and industry experts, these programs enable our teachers
                                    to refine their skills and stay up-to-date with current trends.
                                </p>
                                <p>
                                    This initiative promotes a culture of continuous learning. We believe learning
                                    is a lifelong journey, and our teachers' growth directly improves the quality
                                    of education you receive.
                                </p>
                                <p>
                                    I encourage you to appreciate the efforts of our teachers and make the most of
                                    the enriched learning environment they offer. With support from our management,
                                    we've also established the YCMOU, Nashik study centre to help students who may
                                    have missed formal education opportunities.
                                </p>
                                <p>
                                    We are committed to mentoring you as our mentees. Let us work hand in hand to
                                    build your future together.
                                </p>
                                <p>
                                    Thank you for visiting our website. I wish you a fulfilling and successful
                                    journey at our college.
                                </p>
                            </div>

                            <div className="mt-6">
                                <p className="font-bold text-gray-900">Best Regards,</p>
                                <p className="font-bold text-gray-900">Dr. Vinod R. Raut</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default PrincipalDesk;