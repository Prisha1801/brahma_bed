import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
                    Gallery
                </h2>

                <p className="text-gray-400 text-sm mb-12">No gallery images found.</p>

                <div className="flex justify-center">
                    <Link
                        to="/"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-3 rounded-full transition-colors duration-200"
                    >
                        See More
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Gallery;