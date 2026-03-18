import React from "react";
import { Link } from "react-router-dom";

const images = [
    "/gallery/g1.avif",
    "/gallery/g2.avif",
    "/gallery/g3.avif",
    "/gallery/g4.avif",
];

const Gallery = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
                    Gallery
                </h2>

                {/* IMAGE GRID */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
                        >
                            <img
                                src={src}
                                alt={`gallery-${index}`}
                                className="w-full h-40 object-cover hover:scale-110 transition duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* BUTTON */}
                <div className="flex justify-center">
                    <Link
                        to="/photos"
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