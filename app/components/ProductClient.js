'use client';

import { useState } from 'react';
import Markdown from 'react-markdown';

export default function ProductClient({ title, images, colors, price, content }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h1>
      
      {/* Main Image Container with Fixed Size */}
      <div className="mb-6 flex justify-center items-center" style={{ width: '100%', height: '400px' }}>
        <img
          src={mainImage}
          alt={title}
          className="max-h-full max-w-full object-contain"
          style={{ maxHeight: '100%', maxWidth: '100%', margin: 'auto' }}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center space-x-4 mb-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} view ${index + 1}`}
            className="w-24 h-24 object-cover rounded cursor-pointer hover:opacity-80"
            onMouseEnter={() => setMainImage(image)}
          />
        ))}
      </div>

      {/* Description Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Description</h2>

      {/* Enhanced Markdown Content */}
      <div className="mt-4 text-gray-800 leading-relaxed">
        <Markdown
          components={{
            h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-xl font-semibold mt-6 mb-4" {...props} />,
            p: ({ node, ...props }) => <p className="text-base mb-4" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 pl-6" {...props} />,
            li: ({ node, ...props }) => <li className="mb-2" {...props} />,
            strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
          }}
        >
          {content}
        </Markdown>
      </div>

      {/* Product Details */}
      <div className="mt-6">
        <p className="text-gray-900 font-semibold">Couleurs disponibles: {colors.join(', ')}</p>
        <p className="text-gray-900 font-semibold">Prix: {price}</p>
      </div>
      
      {/* Centered Contact Button */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://www.facebook.com/YourPageName"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          Contactez-nous sur Facebook
        </a>
      </div>
    </div>
  );
}
