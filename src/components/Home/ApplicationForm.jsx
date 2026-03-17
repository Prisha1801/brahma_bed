import React, { useState } from 'react';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        program: '',
        agreed: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const programs = [
        'B.A. (Bachelor of Arts)',
        'B.Com. (Bachelor of Commerce)',
        'B.Sc. (Bachelor of Science)',
        'B.Ed. (Bachelor of Education)',
        'M.A. (Master of Arts)',
        'M.Com. (Master of Commerce)',
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/banners/b1.jpg')" }}
            />

            {/* Dark overlay — scoped inside this component only */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Form card */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-4xl px-8 py-10">

                {submitted ? (
                    <div className="text-center py-16">
                        <div className="text-green-500 text-6xl mb-4">✓</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
                        <p className="text-gray-500">We'll contact you within 1 business day after submission.</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-blue-600 text-center mb-8">
                            Admission Form
                        </h2>

                        <div className="space-y-6">

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                />
                            </div>

                            {/* Email + Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-1">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-1">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                    />
                                </div>
                            </div>

                            {/* Select Program */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-1">
                                    Select Program <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        name="program"
                                        value={formData.program}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none bg-white transition"
                                    >
                                        <option value="" disabled>Choose a program...</option>
                                        {programs.map((p) => (
                                            <option key={p} value={p}>{p}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs">▼</div>
                                </div>
                            </div>

                            {/* Terms checkbox */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="agreed"
                                    id="agreed"
                                    checked={formData.agreed}
                                    onChange={handleChange}
                                    className="w-4 h-4 border-gray-300 rounded accent-blue-600"
                                />
                                <label htmlFor="agreed" className="text-sm text-gray-700">
                                    I agree to the{' '}
                                    <a href="#" className="text-blue-600 hover:underline font-medium">Terms</a>
                                    {' '}and{' '}
                                    <a href="#" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>.
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                onClick={handleSubmit}
                                disabled={!formData.agreed}
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm py-3 rounded-md transition-colors duration-200"
                            >
                                Submit Application
                            </button>

                            <p className="text-center text-xs text-gray-400">
                                We'll contact you within 1 business days after submission.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ApplicationForm;