"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');

  // Close menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#contact', label: 'اتصل بنا', id: 'contact' },
    { href: '/projects', label: 'مشاريعنا', id: 'projects' },
    { href: '#about', label: 'من نحن', id: 'about' },
    { href: '/', label: 'الرئيسية', id: 'home' },
  ];

  const handleLinkClick = (href: string) => {
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-gray-100 ${
          scrolled 
            ? 'shadow-lg border-b border-gray-200' 
            : 'bg-opacity-90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 lg:py-3">
            {/* Logo Section */}
            <Link 
              href="/"
              className="flex items-center space-x-3 space-x-reverse group cursor-pointer"
              onClick={() => handleLinkClick('/')}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-110"></div>
                <Image
                  src="/logo.png"
                  alt="شعار الطبقات السبعة"
                  width={50}
                  height={50}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
             
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    scrolled
                      ? 'text-gray-900 hover:text-orange-500'
                      : 'text-gray-900 hover:text-orange-500'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transform origin-right transition-transform duration-300 ${
                    activeSection === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-gray-900 hover:bg-gray-100'
              } ${isMenuOpen ? 'rotate-180' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        {/* Menu Content */}
        <div
          className={`absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden transform transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                    activeSection === link.href
                      ? 'text-orange-600 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.label}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeSection === link.href ? 'text-orange-500 rotate-180' : 'text-gray-400'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;