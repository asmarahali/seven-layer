"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const OurProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('interior');
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  // Project data with actual photos from public folder
  const projects: {
    interior: Array<{ id: number; title: string; image: string }>;
    exterior: Array<{ id: number; title: string; image: string }>;
  } = {
    interior: Array.from({ length: 22 }, (_, i) => ({
      id: i + 1,
      title: `تصميم داخلي ${i + 1}`,
      image: `/inside/photo_${i + 1}.jpg`,
  
    })),
    exterior: Array.from({ length: 27 }, (_, i) => ({
      id: i + 1,
      title: `تصميم خارجي ${i + 1}`,
      image: `/outside/photo_${i + 1}_2025-09-03_10-37-34.jpg`,
    
    }))
  };

  const currentProjects = projects[activeTab as keyof typeof projects];
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(currentProjects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProjects = () => {
    const start = currentSlide * projectsPerSlide;
    return currentProjects.slice(start, start + projectsPerSlide);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-orange-500 text-lg font-semibold tracking-wider uppercase mb-2 block">
              معرض أعمالنا
            </span>
            <h2 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight cursor-pointer hover:text-orange-600 transition-colors duration-300"
              onClick={() => router.push('/projects')}
            >
              مشاريعنا
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            نفخر بتقديم أفضل التصاميم المعمارية والداخلية التي تجمع بين الأصالة والحداثة
            <br />
            <span className="text-orange-600">لنحول أحلامكم إلى واقع معماري مميز</span>
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-slate-200">
            <button
              onClick={() => {
                setActiveTab('interior');
                setCurrentSlide(0);
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'interior'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg transform scale-105'
                  : 'text-slate-600 hover:text-orange-500 hover:bg-slate-50'
              }`}
            >
              تصميم داخلي
            </button>
            <button
              onClick={() => {
                setActiveTab('exterior');
                setCurrentSlide(0);
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'exterior'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg transform scale-105'
                  : 'text-slate-600 hover:text-orange-500 hover:bg-slate-50'
              }`}
            >
              تصميم خارجي
            </button>
          </div>
        </div>

        {/* Projects Grid with Enhanced Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getCurrentProjects().map((project: { id: number; title: string; image: string}, index: number) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/api/placeholder/400/300';
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex gap-4">
                        <button className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 border border-white/20">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            ))}
          </div>

          {/* Enhanced Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 text-gray-600 hover:text-orange-500 z-20 border border-gray-100 hover:border-orange-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === 0}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 text-gray-600 hover:text-orange-500 z-20 border border-gray-100 hover:border-orange-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === totalSlides - 1}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Enhanced Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-3 mb-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-12 h-4 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-110'
                    : 'w-4 h-4 bg-gray-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default OurProjectsSection;