import React from 'react';
import { Building2 } from './Icons';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
            <Building2 className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold">الطبقات السبعة</span>
          </div>
          <p className="text-gray-400 mb-4">نبني بثقة ... من التصميم إلى الإنجاز</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/mo9a.ol?igsh=MWRhbjJ5cXQwNXJuZg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition">
              <FaTiktok className="w-5 h-5" />
            </a>
            <a href="https://x.com/7tabaqat?t=_wegr-CtD8VCorGNNsvwwg&s=08" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.564-2.003.974-3.127 1.195-.897-.957-2.173-1.555-3.594-1.555-2.717 0-4.917 2.2-4.917 4.917 0 .39.045.765.127 1.124-4.083-.205-7.702-2.16-10.126-5.134-.422.725-.664 1.562-.664 2.457 0 1.697.863 3.197 2.173 4.078-.803-.026-1.56-.247-2.224-.616v.062c0 2.367 1.684 4.342 3.918 4.798-.41.111-.841.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.207 7.557 2.207 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63.961-.695 1.8-1.562 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm">
              © 2024 شركة الطبقات السبعة للمقاولات. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
