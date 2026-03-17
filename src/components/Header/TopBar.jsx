import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp from "/social-icons/wp.jpg";
import three from "/social-icons/360.jpg";
import fb from "/social-icons/fb.jpg";
import insta from "/social-icons/ig.jpg";
import linkedin from "/social-icons/id.jpg";
import youtube from "/social-icons/yt.jpg";

const socialIcons = [
    { src: whatsapp, alt: "WhatsApp" },
    { src: three, alt: "360" },
    { src: fb, alt: "Facebook" },
    { src: insta, alt: "Instagram" },
    { src: linkedin, alt: "LinkedIn" },
    { src: youtube, alt: "YouTube" },
];

const TopBar = () => {
    return (
        <div className="w-full bg-[#4B8E3F] text-white text-[13px]">

            {/* ── Desktop ── */}
            {/*now we will remove dot from list items */}
            <div className="hidden md:flex container mx-auto px-4 lg:px-8 py-1.5 justify-between items-center">
                <ul className="flex items-center gap-6 list-none m-0 p-0">
                    <li>
                        <Link
                            to="/"
                            target="_blank"
                            className="hover:text-green-200 transition-colors font-medium"
                        >
                            Download E-Brochures
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/pdf/Admission Form.pdf"
                            target="_blank"
                            className="hover:text-green-200 transition-colors font-medium"
                        >
                            Admission
                        </Link>
                    </li>
                </ul>

                <ul className="flex items-center gap-3 list-none m-0 p-0">
                    <li>
                        <span className="font-bold uppercase tracking-wider text-white text-[10px]">
                            Get Connected
                        </span>
                    </li>
                    {socialIcons.map((item, idx) => (
                        <li key={idx}>
                            <a href="#" target="_blank" rel="noopener noreferrer"
                                className="block w-5 h-5 rounded overflow-hidden hover:scale-125 transition-transform">
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── Mobile ── */}
            <div className="flex md:hidden items-center justify-between px-3 py-1.5 gap-2">
                {/*  */}
                <div className="flex flex-col gap-0.5 text-[11px] font-medium leading-tight m-0 p-0">
                    <Link to="/" target="_blank"
                        className="hover:text-green-200 transition-colors whitespace-nowrap">
                        Download E-Brochures
                    </Link>
                    <Link to="/pdf/Admission Form.pdf" target="_blank"
                        className="hover:text-green-200 transition-colors whitespace-nowrap">
                        Admission
                    </Link>
                </div>

                {/* Right: GET CONNECTED + icons */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="font-bold uppercase text-[10px] tracking-wide whitespace-nowrap">
                        Get Connected
                    </span>
                    {/* Show only WhatsApp and 360 on mobile to avoid overflow */}
                    {socialIcons.slice(0, 2).map((item, idx) => (
                        <a key={idx} href="#" target="_blank" rel="noopener noreferrer"
                            className="block w-5 h-5 rounded overflow-hidden flex-shrink-0">
                            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default TopBar;