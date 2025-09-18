"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./components/SplitText/SplitText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-cubic'
    });

    // Show content after small delay
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  const logo = "/img/logo/logo.png";

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/img/background/background5.jpg')"
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-500/10 to-pink-500/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-400/15 to-purple-400/15 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-400/25 to-blue-400/25 rounded-full blur-lg animate-bounce" />

      {/* Main Content Container */}
      <div className={`relative z-10 flex flex-col items-center justify-center text-center px-6 py-8 transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Logo with Enhanced Styling */}
        <div 
          className="mb-8 relative"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full opacity-20 blur-lg" />
          <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-2xl ring-4 ring-white/50 hover:ring-blue-400/50 transition-all duration-500 hover:scale-110 group">
            <img
              src={logo}
              alt="NBAC Logo - Nakprasith Business Administration College"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain group-hover:rotate-12 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Welcome Text */}
        <div className=" mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-500 drop-shadow-xl drop-shadow-white">
            <SplitText
              text="WELCOME TO"
              className="font-bold text-center block leading-tight"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-pink-500 drop-shadow-xl drop-shadow-white">
            <SplitText
              text="NBAC WEBSITE"
              className="font-semibold text-center block leading-tight"
              delay={200}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
          
          {/* Subtitle */}
          <p 
            className="text-sm sm:text-base md:text-lg font-bold mt-4 max-w-md mx-auto leading-relaxed bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-xl drop-shadow-white"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            วิทยาลัยเทคโนโลยีนาคประสิทธิ์ บริการธุรกิจ
          </p>
        </div>

        {/* Enhanced CTA Button */}
        <div 
          className="relative group"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          {/* Button Glow Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
          
          <a
            href="/home"
            className="relative inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-white/90 backdrop-blur-sm text-gray-800 font-bold text-base sm:text-lg rounded-full shadow-2xl border border-white/60 hover:bg-white hover:scale-110 hover:shadow-3xl transition-all duration-500 ease-out ring-2 ring-transparent hover:ring-blue-400/50 group overflow-hidden"
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            
            {/* Button Content */}
            <span className="relative z-10 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
              เข้าสู่เว็บไซต์
            </span>
            
            {/* Arrow Icon */}
            <svg 
              className="relative z-10 ml-3 w-5 h-5 text-blue-500 group-hover:text-pink-500 group-hover:translate-x-1 transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Additional Info */}
        <div 
          className="mt-8 text-xs sm:text-sm text-gray-600 font-medium opacity-80"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <p>กดเพื่อเข้าสู่หน้าหลักของเว็บไซต์</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-bounce mt-2" />
          </div>
          <span className="text-xs text-gray-500 font-medium">เลื่อนลง</span>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"
          style={{animationDelay: '0s', animationDuration: '3s'}} 
        />
        <div 
          className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50 animate-pulse"
          style={{animationDelay: '2s'}} 
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-ping"
          style={{animationDelay: '4s'}} 
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-blue-300 rounded-full opacity-30 animate-bounce"
          style={{animationDelay: '1s', animationDuration: '2s'}} 
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.5;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}