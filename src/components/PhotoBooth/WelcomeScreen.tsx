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
    <div className="flex flex-col">
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

      {/* Testimonials Section */}
      <div className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by Everyone
            </h2>
            <p className="text-lg text-gray-600">
              See what others are saying about their experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Sarah Chen</h3>
                  <p className="text-gray-500">Party Host</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The photo booth was a hit at my birthday party! Everyone had so much fun taking photos and creating memories together."
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Mike Johnson</h3>
                  <p className="text-gray-500">Wedding Planner</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Perfect for weddings! The instant photo sharing and fun filters made it a huge hit with our guests. So many great memories captured!"
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl">
                  E
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Emma Davis</h3>
                  <p className="text-gray-500">Event Organizer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The photo booth was the highlight of our corporate event! Everyone loved the instant sharing and fun filters. So much laughter and joy!"
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-[#FFE17D] rounded-sm"></div>
                <div className="w-6 h-6 bg-[#98D8DD] rounded-sm"></div>
                <div className="w-6 h-6 bg-[#B7E3F5] rounded-sm"></div>
                <div className="w-6 h-6 bg-[#4F7FFF] rounded-sm"></div>
              </div>
              <p className="text-sm">
                Creating memorable moments through the lens of fun and creativity.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-end">
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/Yoon_ro_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/yoonro1995" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/yoonro1995" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfAoY4X9SsNZWAdbVekB2NvHDy7hkPG-rtorphVwqAexccp1A/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#4F7FFF] text-white hover:bg-blue-600 transition-colors"
              >
                <span className="mr-2">💭</span>
                Share your thoughts with us!
              </a>
              <p className="text-sm">
                © {new Date().getFullYear()} Snap4Cuts. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomeScreen; 