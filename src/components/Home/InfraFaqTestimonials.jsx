import React from 'react';

const InfraFaqTestimonials = () => {
    return (
        <>
            {/* ── Infrastructure ── */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
                        Our Infrastructure
                    </h2>
                    <p className="text-gray-400 text-sm">No infrastructure data available.</p>
                </div>
            </section>

            <hr className="border-gray-200 max-w-5xl mx-auto" />

            {/* ── FAQ + Testimonials ── */}
            <section
                className="py-16 px-4"
                style={{
                    background: 'linear-gradient(135deg, #5b6fd6 0%, #7b8ee0 40%, #a8b8f0 100%)',
                }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* FAQ */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white text-center lg:text-left mb-8">
                                Frequently Asked Questions
                            </h2>
                            <div className="bg-white rounded-lg px-6 py-8 text-center text-gray-800 text-sm">
                                No FAQs available at the moment.
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white text-center lg:text-left mb-8">
                                What Our Students Say
                            </h2>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default InfraFaqTestimonials;