import React from 'react';
import ReactMarkdown from 'react-markdown';

const ShoeList = ({ shoes }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nos Chaussures</h2>
      <div className="flex flex-col space-y-16">
        {shoes.map((shoe, index) => (
          <div
            key={shoe.id}
            className={`flex flex-col md:flex-row items-start md:items-stretch ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Shoe Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center">
              <img src={shoe.images[0]} alt={shoe.title} className="max-w-full h-auto rounded-lg" />
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
                  href={`/products/${shoe.id}`}
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition text-center"
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
