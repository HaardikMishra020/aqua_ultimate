import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navbar = ({home}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Products', href: '#products' },
    { name: 'Contact Us', href: '#additional-info' },

  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="/">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              
              <img src="/logo.png" alt="Aqua Ultimate Logo" className="w-12 h-auto object-contain mr-3" />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-md md:text-2xl font-cinzel">AQUA ULTIMATE</span>
                {/* <span className="text-white text-xs md:text-sm font-league">SOFTENING SOLUTIONS</span> */}
              </div>
              
            </div>
          </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className='text-white ml-4'>Home</Link>
              {home &&
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white px-3 py-2 rounded-md text-md font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))
              }
              <Link to="/about" className="text-white ml-4">About Us</Link>
            </div>
          </div>

          {/* Desktop Icons */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200">
              <ShoppingCart size={20} />
            </button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {home && navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">About Us</Link>
            {/* <div className="flex items-center space-x-4 pt-4 border-t border-gray-800 mt-4">
              <button className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200">
                <Search size={20} />
              </button>
              <button className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200">
                <ShoppingCart size={20} />
              </button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 