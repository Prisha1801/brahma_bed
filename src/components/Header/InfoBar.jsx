import React from 'react';

const InfoBar = () => {
    return (
        <div style={{ backgroundColor: '#093A6C' }} className="py-6 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                {/* Top line - spaced letters */}
                <p className="font-bold text-white tracking-[0.2em] text-[13px] md:text-[15px] mb-1 uppercase">
                    NASHIK GRAMIN SHIKSHAN PRASARAK MANDAL'S
                </p>

                {/* College Name */}
                <h1 className="font-extrabold text-white text-[15px] md:text-[18px] tracking-wide mb-3 leading-tight uppercase">
                    BRAHMA VALLEY COLLEGE OF EDUCATION (B.Ed.)
                </h1>

                {/* University lines */}
                <p className="text-white text-[13px] md:text-[14px] font-semibold leading-relaxed max-w-3xl mx-auto">
                    Id. No PU/NS/B.ED/104/2007
                </p>
            </div>
        </div>
    );
};

export default InfoBar;