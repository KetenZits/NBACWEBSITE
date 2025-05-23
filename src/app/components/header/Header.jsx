"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // เพิ่ม import CSS ของ Pagination
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาของแอนิเมชัน (ms)
      once: false, // ให้เล่นซ้ำเมื่อเลื่อนกลับมา
      mirror: true, // เล่นซ้ำแม้ว่าองค์ประกอบจะออกจากหน้าจอแล้วกลับมา
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
    <div
      className="
    min-h-[80vh]
    bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0)),url('/img/background/background4.jpg')]
    bg-cover
    bg-fixed
    bg-center
    bg-no-repeat
    flex items-center justify-center
    shadow-lg
    "
    >
      <div
        className="container mx-auto max-w-[1320px] py-10 text-center"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-center lg:flex-row items-center h-[300px] mx-2">
          <img
            src={logo}
            alt="logo"
            className="max-w-[100px] lg:max-w-[150px]"
          />
          <h1 className="bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent text-4xl lg:text-6xl font-bold lg:ml-5 py-2">
            Nakprasith Bussiness <br />
            Administration College
          </h1>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // เปลี่ยนรูปทุก 3 วินาที
            disableOnInteraction: false, // ให้ล็อปต่อเนื่องแม้มีการกดสไลด์
          }}
          loop={true}
          className="w-9/12 mx-auto border-4 border-white rounded-3xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={800}
                height={400}
                className="w-full h-9/12 object-cover rounded-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
