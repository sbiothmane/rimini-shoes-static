'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import { usePathname } from 'next/navigation'; // Use next/navigation for client-side path detection

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path using usePathname from next/navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the link is active
  const isActiveLink = (href) => (pathname === href ? 'text-blue-600' : 'text-gray-600');

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative">
      {/* Clickable Logo and Title */}
      <Link href="/" className="flex items-center space-x-4">
        <Image 
          src="/images/logo.jpg" 
          alt="Rimini" 
          width={80} 
          height={80} 
          className="h-20 w-auto cursor-pointer" 
        />
        <h1 className="text-2xl font-bold text-gray-800 cursor-pointer">Rimini</h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <Link href="/" className={`${isActiveLink('/')} hover:text-gray-800`}>
          Accueil
        </Link>
        <Link href="/about" className={`${isActiveLink('/about')} hover:text-gray-800`}>
          À propos
        </Link>
        <Link href="/shoes" className={`${isActiveLink('/shoes')} hover:text-gray-800`}>
          Chaussures
        </Link>
        <Link href="/contact" className={`${isActiveLink('/contact')} hover:text-gray-800`}>
          Contactez-nous
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 hover:text-gray-600 focus:outline-none"
        >
          {/* Hamburger icon toggle */}
          <svg
            className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden w-full absolute top-full left-0 bg-white shadow-md z-10">
          <nav className="flex flex-col items-center space-y-2 py-4">
            <Link href="/" className={`${isActiveLink('/')} hover:text-gray-800`}>
              Accueil
            </Link>
            <Link href="/about" className={`${isActiveLink('/about')} hover:text-gray-800`}>
              À propos
            </Link>
            <Link href="/shoes" className={`${isActiveLink('/shoes')} hover:text-gray-800`}>
              Chaussures
            </Link>
            <Link href="/contact" className={`${isActiveLink('/contact')} hover:text-gray-800`}>
              Contactez-nous
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
