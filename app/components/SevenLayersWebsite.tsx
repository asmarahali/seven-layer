'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'; // Added import for Link
import Image from 'next/image'; // Added import for Image

// Define interface for SVG icon props
interface IconProps {
  className?: string;
}

// Custom SVG Icons with proper TypeScript interfaces
const Building2: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Target: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Eye: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const Users: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CheckCircle: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Star: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);



const Menu: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Phone: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPin: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SevenLayersWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: <Star className="w-6 h-6" />, title: "الجودة", desc: "لا مساومة في التنفيذ" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "الالتزام", desc: "أساس كل شراكة ناجحة" },
    { icon: <Building2 className="w-6 h-6" />, title: "السلامة", desc: "أولوية في كل موقع" },
    { icon: <Eye className="w-6 h-6" />, title: "الشفافية", desc: "التعامل الصادق والواضح" },
    { icon: <Target className="w-6 h-6" />, title: "الابتكار", desc: "حلول حديثة لمشاريع متجددة" },
    { icon: <Users className="w-6 h-6" />, title: "العمل الجماعي", desc: "روح الفريق تصنع الإنجاز" }
  ];

  const goals = [
    "تنفيذ مشاريع متكاملة وفق أعلى معايير الجودة والسلامة",
    "تسليم الأعمال في الوقت المحدد وضمن الميزانية المتفق عليها",
    "توسيع نطاق خدماتنا داخل وخارج المملكة",
    "تحقيق رضا العميل الكامل في جميع مراحل العمل",
    "المساهمة في دعم رؤية السعودية 2030 من خلال تطوير البنية التحتية والمشاريع العمرانية"
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
        }

        .gradient-text {
          background: linear-gradient(135deg, #f97316, #ea580c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation */}
          <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 space-x-reverse">
             <Image
               src="/logo.png"
               alt="شعار الطبقات السبعة"
               width={60} // adjust size as needed
               height={60}
               className="object-contain"
             />
              <span  className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors`}>الطبقات السبعة</span>
            </div>
            
            <div className="hidden md:flex space-x-8 space-x-reverse">
            <Link href="/" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors`}>الرئيسية</Link>
             <Link href="#about" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors`}>من نحن</Link>
            <Link href="#contact" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors`}>اتصل بنا</Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-2 space-y-1">

+              <Link href="/" className="block py-2 text-gray-700 hover:text-orange-500">الرئيسية</Link>
+              <Link href="#about" className="block py-2 text-gray-700 hover:text-orange-500">من نحن</Link>
+              <Link href="#contact" className="block py-2 text-gray-700 hover:text-orange-500">اتصل بنا</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bg.jpg)',
          }}
        ></div>
        
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="absolute top-20 right-20 w-4 h-4 bg-orange-400/70 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-orange-300/70 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-60 w-5 h-5 bg-orange-500/70 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-32 left-20 w-6 h-6 bg-orange-400/50 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-32 left-40 w-4 h-4 bg-orange-300/60 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`mb-8 transform transition-all duration-1000 ${
            isVisible.home ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}>

            <Image
              src="/logo.png"
                alt="شركة الطبقات السبعة"
                width={160}   // add numeric width
                height={160}  // add numeric height
                className="mx-auto mb-6 animate-float"
              />
          </div>
          
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${
            isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
              شركة الطبقات السبعة
            </h1>
            
            <div className="w-24 h-2.888c bg-orange-500 mx-auto animate-pulse"></div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-orange-400 font-semibold animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              نبني بثقة ... من التصميم إلى الإنجاز
            </p>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              نوفر لك مستوى راقيًا من الراحة والجودة في البناء والتشييد
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>      
              <button className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105"
              onClick={() => router.push('/projects')}>
                مشاريعنا
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 flex flex-col space-y-4 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <a href="#" className="w-12 h-12 bg-orange-500/80 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 bg-orange-500/80 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.342-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.548-1.378l-.677 2.578c-.241.932-.898 2.106-1.338 2.821C9.67 23.812 10.8 24.029 12.017 24.029c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001.029 12.017.001z"/>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 bg-orange-500/80 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 bg-orange-500/80 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
        </div>
        
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">من نحن</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${
              isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <p className="text-lg text-gray-700 leading-relaxed">
                نحن شركة الطبقات السبعة للمقاولات، شركة رائدة في قطاع البناء والتشييد، نقدم باقة متكاملة من خدمات المقاولات تبدأ من التصميم الهندسي وصولًا إلى الإنجاز الكامل. نمتلك سجلًا غنيًا بالمشاريع المنجزة بكفاءة وجودة، ونحرص على تقديم حلول هندسية مدروسة تلائم احتياجات كل عميل.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                منذ انطلاقتنا، اعتمدنا على أسس قوية من الاحترافية، الالتزام، والابتكار، مما جعلنا خيارًا موثوقًا للأفراد، الشركات، والمطورين في مختلف مناطق المملكة.
              </p>
            </div>
            
            <div className={`grid grid-cols-2 gap-6 transform transition-all duration-1000 delay-400 ${
              isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                  <Building2 className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">خبرة عالية</h3>
                <p className="text-gray-600">سنوات من الخبرة في البناء والتشييد</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 group" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                  <CheckCircle className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">جودة مضمونة</h3>
                <p className="text-gray-600">التزام بأعلى معايير الجودة والسلامة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div id="mission" className={`text-center lg:text-right transform transition-all duration-1000 ${
              isVisible.mission ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-6 hover:bg-orange-500 hover:scale-110 transition-all duration-300 group">
                <Target className="w-12 h-12 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 gradient-text">رسالتنا</h3>
              <div className="bg-orange-50 p-8 rounded-xl border-r-4 border-orange-500 hover:shadow-lg transition-all duration-300 hover:border-orange-600">
                <p className="text-lg text-gray-700 leading-relaxed">
                  تقديم خدمات مقاولات متكاملة وعالية الجودة، تبدأ من الفكرة وتنتهي بتسليم مشروع متقن، مع الالتزام التام بالمواعيد، والمعايير الهندسية، ورضا العميل في كل مرحلة.
                </p>
              </div>
            </div>

            <div id="vision" className={`text-center lg:text-right transform transition-all duration-1000 delay-200 ${
              isVisible.vision ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-6 hover:bg-orange-500 hover:scale-110 transition-all duration-300 group">
                <Eye className="w-12 h-12 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 gradient-text">رؤيتنا</h3>
              <div className="bg-gray-50 p-8 rounded-xl border-r-4 border-gray-500 hover:shadow-lg transition-all duration-300 hover:border-gray-600">
                <p className="text-lg text-gray-700 leading-relaxed">
                  أن نكون من بين الشركات الأكثر تأثيرًا وموثوقية في تطوير البنية التحتية والمشاريع العمرانية داخل المملكة العربية السعودية، وأن نُعرف بجودة التنفيذ وابتكار الحلول الهندسية، مساهمين بفعالية في تحقيق أهداف رؤية السعودية 2030 نحو تنمية مستدامة وبنية تحتية عصرية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section id="goals" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.goals ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">أهدافنا</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto animate-pulse"></div>
          </div>
          
          <div className="space-y-6">
            {goals.map((goal, index) => (
              <div key={index} className={`bg-white p-6 rounded-xl shadow-lg border-r-4 border-orange-500 hover:shadow-xl transition-shadow duration-300 ${
                isVisible.goals ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">قيمنا</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 group hover:scale-105 transform ${
                isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-500 transition-all duration-300 group-hover:rotate-12">
                    <div className="text-orange-500 group-hover:text-white transition-colors">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{value.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">تواصل معنا</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">اتصل بنا</h3>
              <p className="text-gray-300">+966536581079</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">البريد الإلكتروني</h3>
              <p className="text-gray-300">7tabaqat@gmail.com</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">العنوان</h3>
              <p className="text-gray-300">المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <Building2 className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">الطبقات السبعة</span>
            </div>
            <p className="text-gray-400 mb-4">نبني بثقة ... من التصميم إلى الإنجاز</p>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-gray-400 text-sm">
                © 2024 شركة الطبقات السبعة للمقاولات. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SevenLayersWebsite;