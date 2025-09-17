"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  // Fetch API (ถ้าจะใช้จริงๆ)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error : ", err);
      } finally {
        setLoading(false);
      }
    };
    // fetchData(); // Comment ไว้ก่อนเพราะไม่ได้ใช้
    setLoading(false); // Set loading เป็น false เลย
  }, []);

  const visionData = [
    {
      title: "วิสัยทัศน์",
      content: "สร้างเสริมคุณธรรม ก้าวนำการเรียนรู้ พัฒนาสู่มาตรฐานวิชาชีพ",
      icon: "🎯",
      delay: 100
    },
    {
      title: "ปรัชญา", 
      content: "เรียนดี มีวินัย พลานามัยสมบูรณ์",
      icon: "📚",
      delay: 200
    },
    {
      title: "อัตลักษณ์",
      content: "แต่งกายดี",
      icon: "👔",
      delay: 300
    },
    {
      title: "เอกลักษณ์",
      content: "วิทยาลัยส่งเสริมอาชีพ",
      icon: "🏆",
      delay: 400
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 
                    overflow-hidden py-12 md:py-20">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-200 to-blue-200 
                    rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-200 to-purple-200 
                    rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 
                    rounded-full opacity-15 animate-bounce"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Divider with Icon */}
        <div className="flex flex-col items-center mb-16" data-aos="fade-up">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full 
                          flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 
                      overflow-hidden" data-aos="zoom-in">
          
          <div className="flex flex-col xl:flex-row">
            
            {/* Director Card Section */}
            <div className="xl:w-1/3 p-8 md:p-12 flex flex-col justify-center items-center 
                          bg-gradient-to-br from-pink-100/50 to-blue-100/50">
              <div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 
                         border border-white/60 hover:shadow-2xl transition-all duration-500 
                         hover:scale-105 max-w-sm w-full"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                {/* Director Image */}
                <div className="relative mb-6 group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-blue-400 
                                rounded-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img 
                    src="/img/leader/leader.jpg" 
                    alt="นายสมบัติ ธรรมนาถพงศ์ - ผู้อำนวยการวิทยาลัย"
                    className="relative w-full h-48 object-cover rounded-xl shadow-md"
                  />
                </div>
                
                {/* Director Info */}
                <div className="text-center space-y-3">
                  <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 
                               bg-clip-text text-transparent leading-tight">
                    นายสมบัติ ธรรมนาถพงศ์
                  </h3>
                  <div className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                    <p className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                      ผู้อำนวยการ
                    </p>
                    <p className="mt-1">
                      วิทยาลัยเทคโนโลยีนาคประสิทธิ์<br/>
                      บริการธุรกิจ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Content Section */}
            <div className="xl:w-2/3 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-full">
                
                {visionData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg 
                             border border-white/40 hover:shadow-xl hover:bg-white/70 
                             transition-all duration-300 hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                  >
                    {/* Icon */}
                    <div className="text-4xl mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-2xl md:text-3xl font-bold text-center mb-4 
                                 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text 
                                 text-transparent">
                      {item.title}
                    </h4>
                    
                    {/* Content */}
                    <div className="text-center text-base md:text-lg leading-relaxed 
                                  bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text 
                                  text-transparent font-semibold">
                      {item.content.split(' ').map((word, i) => (
                        <span key={i}>
                          {word}
                          {i < item.content.split(' ').length - 1 && <br className="md:hidden"/>}
                          {i < item.content.split(' ').length - 1 && <span className="hidden md:inline"> </span>}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="flex justify-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Section;