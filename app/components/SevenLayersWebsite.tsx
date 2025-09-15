'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'; // Added import for Link
import Image from 'next/image'; // Added import for Image
import Footer from './Footer';
import { Building2, Target, Eye, Users } from './Icons';

// Define interface for SVG icon props
interface IconProps {
  className?: string;
}

// Custom SVG Icons with proper TypeScript interfaces
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
    { icon: <Users className="w-6 h-6 text-orange-500" />, title: "العمل الجماعي", desc: "روح الفريق تصنع الإنجاز" }
  ];

  const goals = [
    "تنفيذ مشاريع متكاملة وفق أعلى معايير الجودة والسلامة",
    "تسليم الأعمال في الوقت المحدد وضمن الميزانية المتفق عليها",
    "توسيع نطاق خدماتنا داخل وخارج المملكة",
    "تحقيق رضا العميل الكامل في جميع مراحل العمل",
    "المساهمة في دعم رؤية السعودية 2030 من خلال تطوير البنية التحتية والمشاريع العمرانية"
  ];

  return (
    <div style={{ marginTop: '60px' }}> {/* Adjust margin to ensure it is below the navbar */}
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

        @font-face {
          font-family: 'PointArtSansSerifBold';
          src: url('/fonts/PointArtSansSerifBold.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
        }

        .custom-title {
          font-family: 'PointArtSansSerifBold', sans-serif;
        }
      `}</style>
      
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
            {/* Update the title with the custom font */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up custom-title">
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
              <p className="text-gray-300">المملكة العربية السعودية - الرياض - حي الريان</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </div>
  );
};

export default SevenLayersWebsite;