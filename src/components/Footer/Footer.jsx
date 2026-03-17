import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-gray-300">

            {/* ── Main Footer ── */}
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* About Us */}
                <div className="text-center">
                    <h3 className="text-white font-bold text-lg mb-5">About Us</h3>
                    <div className="flex justify-center mb-4">
                        <img src="/logo/left-logo.png" alt="College Logo" className="h-24 w-auto object-contain" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Brahma Valley College of Education (B.Ed.) aims to impart quality education in a safe, natural environment that promotes discipline, motivation, and learning.
                    </p>
                </div>

                {/* Information */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-5">Information</h3>
                    <ul className="space-y-2.5 text-sm">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Management</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Admission</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Additional Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-5">Additional Links</h3>
                    <ul className="space-y-2.5 text-sm">
                        <li><Link to="/" className="hover:text-white transition-colors">Alumni</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">IQAC</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Student Corner</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Student Corner</Link></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-5">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-gray-400 mt-0.5 shrink-0" />
                            <span>Brahma Valley Educational Campus,<br />Trimbak Road, Nashik</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-gray-400 shrink-0" />
                            <span>+91-8459247477</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-gray-400 shrink-0" />
                            <span>vinodraut994@gmail.com</span>
                        </li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-6">
                        <a href="#" aria-label="Facebook"
                            className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors">
                            <FaFacebookF size={14} className="text-white" />
                        </a>
                        <a href="#" aria-label="Twitter"
                            className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors">
                            <FaTwitter size={14} className="text-white" />
                        </a>
                        <a href="#" aria-label="Instagram"
                            className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors">
                            <FaInstagram size={14} className="text-white" />
                        </a>
                    </div>
                </div>

            </div>

            {/* ── Bottom Bar ── */}
            <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
                © 2025 Brahma Valley College of Education (B.Ed.) – All Rights Reserved.
            </div>

        </footer>
    );
};

export default Footer;