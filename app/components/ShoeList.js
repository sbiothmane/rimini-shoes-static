'use client';


import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShoeList = ({ shoes }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nos Chaussures</h2>
      <div className="flex flex-col space-y-16">
        {shoes.map((shoe, index) => (
          <div
            key={shoe.id}
            data-aos="fade-up" // Add AOS animation
            className={`flex flex-col md:flex-row items-start md:items-stretch ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Shoe Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
              <Image
                src={shoe.images[0]}
                alt={shoe.title}
                width={500} // Adjust the width based on your layout needs
                height={500} // Adjust the height based on your layout needs
                className="max-w-full h-auto rounded-lg"
              />
            </div>

            {/* Shoe Details */}
            <div className="w-full md:w-1/2 md:px-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{shoe.title}</h3>
              <div className="text-gray-600 mb-4">
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
                  }}
                >
                  {shoe.fullDescription}
                </ReactMarkdown>
              </div>
              <p className="text-gray-700 mb-2 font-semibold">Couleurs disponibles: {shoe.colors.join(', ')}</p>
              <p className="text-gray-700 mb-4 font-semibold">Prix: {shoe.price}</p>
              <div className="flex justify-center">
                <a
                  href={`/shoes/${shoe.id}`} // Updated route to use '/shoes/[id]'
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-lg"
                >
                  Voir les détails
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShoeList;
