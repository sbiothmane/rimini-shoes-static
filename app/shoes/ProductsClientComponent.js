"use client"; // Enable client-side rendering

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductsClientComponent({ shoes }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredShoes, setFilteredShoes] = useState(shoes);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter shoes based on search query
    const filtered = shoes.filter((shoe) =>
      shoe.title.toLowerCase().includes(query)
    );
    setFilteredShoes(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-7xl mx-auto"> {/* Ensure full width */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Nos Chaussures</h1>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Rechercher des chaussures..."
              className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Product Grid with Full Width and No Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"> {/* Use full width */}
            {filteredShoes.map((shoe) => (
              <Link href={`/shoes/${shoe.id}`} key={shoe.id} passHref>
                <div className="group relative border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 hover:rotate-2 h-80 w-full mx-auto">
                  {/* Image Container with Explicit Width and Height */}
                  <div className="relative overflow-hidden transition-all duration-300 ease-in-out h-48 w-full">
                    <Image
                      src={shoe.images[0]}
                      alt={shoe.title}
                      width={400} // Explicit width
                      height={300} // Explicit height
                      objectFit="cover"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-100 group-hover:object-contain"
                    />
                  </div>
                  {/* Product Info with Consistent Height */}
                  <div className="p-4 transition-opacity duration-300 ease-in-out group-hover:opacity-80 flex flex-col justify-between h-32">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{shoe.title}</h2>
                    <p className="text-gray-900 font-bold">Prix: {shoe.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
