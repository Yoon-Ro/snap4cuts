'use client';

import React from 'react';
import Image from 'next/image';
import { usePhotoBooth } from '@/context/PhotoBoothContext';
import Button from '@/components/ui/Button';

const WelcomeScreen = () => {
  const { setAppState } = usePhotoBooth();

  const handleStart = () => {
    setAppState('permission');
  };

  return (
    <div className="min-h-screen h-screen flex flex-col-reverse lg:flex-row items-center justify-between lg:justify-center gap-4 lg:gap-16 bg-gradient-to-b from-blue-50 to-white p-4 lg:p-16">
      {/* Text Section */}
      <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start space-y-4 lg:space-y-8 text-center lg:text-left pb-6 lg:pb-0">
        {/* Color bars */}
        <div className="flex space-x-2">
          <div className="w-6 h-6 bg-[#FFE17D] rounded-sm"></div>
          <div className="w-6 h-6 bg-[#98D8DD] rounded-sm"></div>
          <div className="w-6 h-6 bg-[#B7E3F5] rounded-sm"></div>
          <div className="w-6 h-6 bg-[#4F7FFF] rounded-sm"></div>
        </div>
        
        {/* Credit badge */}
        <a 
          href="https://x.com/Yoon_ro_" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-100 rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-gray-200 transition-colors"
        >
          <span className="text-gray-700">by @yoon_ro_</span>
        </a>

        {/* Main heading */}
        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
          Unique<br />
          photo booth<br />
          experience
        </h1>

        {/* Subheading */}
        <p className="text-lg lg:text-2xl text-gray-700">
          Turn any gathering into a picture-perfect memory.
        </p>

        {/* Start button */}
        <Button 
          onClick={handleStart} 
          className="rounded-full text-lg px-8 py-3 bg-[#4F7FFF] hover:bg-blue-600 transition-colors"
        >
          Start Taking Photos
        </Button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[45%] flex justify-center relative h-[45vh] lg:h-auto lg:mb-0 pt-8 lg:pt-0">
        <div className="relative w-auto h-full lg:w-[324px] lg:h-auto">
          {/* Mobile Frame */}
          <Image
            src="/Mobile.png"
            alt="Photo booth interface"
            width={324}
            height={648}
            priority
            loading="eager"
            className="w-auto h-full object-contain relative z-10 lg:w-full lg:h-auto"
          />
          
          {/* Collage Image */}
          <div className="absolute top-[-15%] left-[-12%] w-[120%] z-20">
            <Image
              src="/Collage.png"
              alt="Photo collage"
              width={800}
              height={800}
              priority
              loading="eager"
              className="w-full h-auto drop-shadow-xl animate-slideUpDown"
            />
          </div>

          {/* Bottom Bar */}
          <div className="absolute bottom-[5%] left-[12%] w-[100%] z-20 transform translate-x-2">
            <Image
              src="/bar.png"
              alt="Action bar"
              width={352}
              height={88}
              priority
              loading="eager"
              className="w-full h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen; 