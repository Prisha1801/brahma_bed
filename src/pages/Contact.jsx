import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { contactHero } from '../components/common/data/heroData';

const Contact = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...contactHero} />

            {/* Google Map */}
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="w-full h-72 rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <iframe
                        title="Brahma Valley Location"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d239965.99331754522!2d73.6152649!3d19.9888363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebf80b19e905%3A0xa71c2ebc5d4ffab2!2sBrahma%20Valley%20College%20of%20Arts%2C%20Commerce%20and%20Science!5e0!3m2!1sen!2sin!4v1773484954107!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Contact Details + Form */}
            <section ref={contentRef} className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid md:grid-cols-2 gap-6 items-start">

                    {/* Left — Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl shadow-sm p-8"
                    >
                        <h2 className="text-2xl font-bold text-red-500 mb-6">Contact Details</h2>

                        {/* Central Office */}
                        <div className="mb-6">
                            <h3 className="font-bold text-gray-900 text-sm mb-3">Central Office Address</h3>
                            <p className="text-gray-700 text-sm leading-6">
                                Palika Bazar Complex, Near Railway Booking<br />
                                Office, Sharanpur-Trimbak Link Road,<br />
                                Nashik-422002.
                            </p>
                            <p className="text-sm text-gray-700 mt-2">
                                <span className="font-bold text-red-500">Tel:</span> (0253) 2311244
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-blue-600">Mob:</span> 09011226688
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-gray-800">Telefax:</span> (0253) 2311244
                            </p>
                        </div>

                        {/* Campus Address */}
                        <div className="mb-6">
                            <h3 className="font-bold text-gray-900 text-sm mb-3">Campus Address</h3>
                            <p className="text-gray-700 text-sm leading-6">
                                Brahma Valley Educational Campus,<br />
                                Trimbak Road, Anjaneri,<br />
                                Nashik-422213.
                            </p>
                            <p className="text-sm text-gray-700 mt-2">
                                <span className="font-bold text-red-500">Tel:</span> (02594) 299021/022
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-blue-600">Mob:</span> 9881334477, 8378950000, 8378960000
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-purple-600">E-mail:</span>{' '}
                                <a href="mailto:vinodraut994@gmail.com" className="underline text-gray-700 hover:text-blue-600">
                                    vinodraut994@gmail.com
                                </a>
                            </p>
                        </div>

                        {/* Campus Accessibility */}
                        <div>
                            <h3 className="font-bold text-gray-900 text-sm mb-3">Campus Accessibility</h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1.5 leading-6">
                                <li>20 KM from Nashik City (by road)</li>
                                <li>180 KM from Aurangabad (by road)</li>
                                <li>30 KM from Nashik Road Station / 65 KM from Manmad</li>
                                <li>40 KM to Ozar Airport / 180 KM to Mumbai</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right — Send Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-white rounded-xl shadow-sm p-8"
                    >
                        <h2 className="text-2xl font-bold text-red-500 mb-6">Send Us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name + Email */}
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 bg-gray-50"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 bg-gray-50"
                                />
                            </div>

                            {/* Subject */}
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 bg-gray-50"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={8}
                                className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-y bg-gray-50"
                            />

                            {/* Submit */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-2.5 rounded-md text-sm transition-colors duration-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Contact;