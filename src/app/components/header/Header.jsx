"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const images = [
    "/img/slide/slide1.jpg",
    "/img/slide/slide2.jpg",
    "/img/slide/slide3.jpg",
    "/img/slide/slide4.jpg",
    "/img/slide/slide5.jpg",
    "/img/slide/slide6.jpg",
  ];

  const logo = "/img/logo/logo.png";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage: "url('/img/background/background4.jpg')"
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 md:py-12">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div 
            className="text-center mb-8 md:mb-12 lg:mb-16"
            data-aos="fade-up"
          >
            {/* Logo and Title Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              {/* Logo */}
              <div className="flex-shrink-0 p-2">
                <img
                  src={logo}
                  alt="Nakprasith Business Administration College Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 
                           object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* School Name */}
              <div className="text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                             font-bold leading-tight tracking-wide">
                  <span className="block bg-gradient-to-r from-blue-600 via-fuchsia-500 to-pink-500 
                                 bg-clip-text text-transparent drop-shadow-sm">
                    Nakprasith Business
                  </span>
                  <span className="block bg-gradient-to-r from-pink-500 via-fuschsia-500 to-blue-600 
                                 bg-clip-text text-transparent drop-shadow-sm">
                    Administration College
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                              mx-auto md:mx-0 mt-4 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div 
            className="w-full max-w-4xl mx-auto"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden 
                          shadow-2xl ring-4 ring-white/50 backdrop-blur-sm">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ 
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-blue-500',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-purple-600'
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                className="w-full aspect-video md:aspect-[16/10] lg:aspect-[16/9]"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full group">
                      <Image
                        src={image}
                        alt={`School Activity ${index + 1}`}
                        width={1200}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 
                                 group-hover:scale-105"
                        priority={index === 0}
                      />
                      {/* Gradient Overlay for better text readability if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full 
                          animate-pulse hidden lg:block"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400 rounded-full 
                          animate-pulse hidden lg:block"></div>
          </div>

          {/* Optional: Welcome Message */}
          <div 
            className="text-center mt-8 md:mt-12 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed 
                         px-4 font-light">
              Welcome to Nakprasith Business Administration College - 
              Where Excellence Meets Innovation in Business Education
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-2 h-2 bg-blue-300 rounded-full 
                    animate-bounce hidden xl:block"></div>
      <div className="absolute top-3/4 right-8 w-3 h-3 bg-purple-300 rounded-full 
                    animate-bounce delay-1000 hidden xl:block"></div>
    </div>
  );
};

export default Header;