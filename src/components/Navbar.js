import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { cld } from '../utils/cloudinary';
import {AdvancedImage} from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";

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

  const { i18n } = useTranslation();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { t } = useTranslation();
  // Supported languages
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'bn', label: 'বাংলা' }
  ];
  const navLinks = [
    { name: t('navbar.products'), href: '#products' },
    { name: t('navbar.howItWorks'), href: '#how-it-works' },
    { name: t('navbar.reviews'), href: '#reviews' },
    { name: t('navbar.contact'), href: '#additional-info' },
  ];

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangDropdown(false);
  };

  const cldImg=cld.image('logo_geplrr').format("auto").quality("auto").resize(scale().width(100))

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
              <AdvancedImage cldImg={cldImg} className="w-12 h-auto object-contain mr-3"/>
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
              <Link to="/" className='text-white ml-4'>{t('navbar.home')}</Link>
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
              <Link to="/about" className="text-white ml-4">{t('navbar.about')}</Link>
              {/* Language Switcher Dropdown */}
              <div className="ml-6 relative">
                <button
                  onClick={() => setShowLangDropdown((prev) => !prev)}
                  className="px-2 py-1 rounded text-sm font-semibold border bg-transparent text-white border-white/40 flex items-center focus:outline-none"
                >
                  {languages.find(l => l.code === i18n.language)?.label || 'EN'}
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {showLangDropdown && (
                  <div className="absolute right-0 mt-2 w-28 bg-white rounded shadow-lg z-50">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === lang.code ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher Dropdown for Mobile */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown((prev) => !prev)}
                className="px-2 py-1 rounded text-xs font-semibold border bg-transparent text-white border-white/40 flex items-center focus:outline-none"
              >
                {languages.find(l => l.code === i18n.language)?.label || 'EN'}
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-28 bg-white rounded shadow-lg z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-xs ${i18n.language === lang.code ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
          <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">{t('navbar.home')}</Link>
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
            
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">{t('navbar.about')}</Link>
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