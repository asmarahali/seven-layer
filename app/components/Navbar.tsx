"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.location.pathname !== "/") return;

      const sections = [
        "home",
        "about",
        "goals",
        "values",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 150;

      if (scrollPosition < 200) {
        setActiveSection("/");
        return;
      }

      let currentSection = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (!el) continue;
        if (scrollPosition >= el.offsetTop) {
          currentSection = sections[i];
          break;
        }
      }

      if (currentSection === "home") setActiveSection("/");
      else if (currentSection === "goals" || currentSection === "values")
        setActiveSection("#about");
      else setActiveSection(`#${currentSection}`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = () => isMenuOpen && setIsMenuOpen(false);
    if (isMenuOpen) document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#contact", label: "اتصل بنا", id: "contact" },
    { href: "#projects", label: "مشاريعنا", id: "projects" },
    { href: "#about", label: "من نحن", id: "about" },
    { href: "/", label: "الرئيسية", id: "home" },
  ];

  const handleLinkClick = (
    href: string,
    e?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    setActiveSection(href);
    setIsMenuOpen(false);

    if (href.startsWith("#")) {
      e?.preventDefault();
      setTimeout(() => {
        const id = href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const pos =
            el.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }
      }, 100);
    } else if (
      href === "/" &&
      typeof window !== "undefined" &&
      window.location.pathname === "/"
    ) {
      e?.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-sm ${
          scrolled
            ? "bg-white/80 shadow-lg border-b border-gray-200"
            : "bg-white/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4">
            <Link
              href="/"
              className="flex items-center gap-3 group cursor-pointer"
              onClick={(e) => handleLinkClick("/", e)}
              aria-label="الذهاب إلى الصفحة الرئيسية"
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-semibold text-gray-900 text-base">
                  الطبقات السبعة
                </span>
                <span className="text-xs text-gray-500">تصميم وتنفيذ</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center space-x-1 space-x-reverse">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.href, e)}
                    className={`relative px-4 py-2 rounded-md font-medium transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                      activeSection === link.href
                        ? "text-orange-600"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-[width] duration-300 ${
                        activeSection === link.href ? "w-10" : "group-hover:w-8"
                      }`}
                    />
                  </Link>
                ))}
              </div>

              {/* Desktop CTA -> open WhatsApp */}
              <Link
                href="https://wa.me/966536581079"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold shadow hover:scale-[1.02] transition-transform duration-200"
              >
                تواصل معنا
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className={`p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                  isMenuOpen ? "text-orange-600" : "text-gray-800"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 pointer-events-none ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50 transform transition-transform duration-300 pointer-events-auto ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 relative">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    الطبقات السبعة
                  </div>
                  <div className="text-xs text-gray-500">تصميم وتنفيذ</div>
                </div>
              </div>
              <button
                className="p-2 rounded-md text-gray-600"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className={`block w-full text-right px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        activeSection === link.href
                          ? "text-orange-600 bg-orange-50"
                          : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile CTA -> open WhatsApp */}
            <div className="mt-6">
              <Link
                href="https://wa.me/966536581079"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </aside>
      </div>

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
