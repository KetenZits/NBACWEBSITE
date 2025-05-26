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

const Section = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาของแอนิเมชัน (ms)
      once: false, // ให้เล่นซ้ำเมื่อเลื่อนกลับมา
      mirror: true, // เล่นซ้ำแม้ว่าองค์ประกอบจะออกจากหน้าจอแล้วกลับมา
    });
  }, []);

  return (
    <div
      className="
    inset-shadow-md 
    bg-gradient-to-r from-pink-100 via-white to-blue-100"
    >
      <div className="container max-w-[1320px] mx-auto py-10">
        <div className="flex w-full flex-col">
          <div className="card rounded-box grid h-20 place-items-center"></div>
          <div className="divider divider-info" data-aos="fade-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.0}
              stroke="currentColor"
              className="size-75 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </div>
          <div className="card rounded-box grid h-20 place-items-center"></div>
        </div>

        <div
          className="bg-gradient-to-r from-pink-200 to-blue-200 rounded-2xl flex justify-center flex-col items-center py-10 mt-10 ring-2 ring-blue-500/50"
          data-aos="zoom-in"
        >
          <div>
            <div
              className="card bg-base-100 w-75 lg:w-86 shadow-xl p-4 ring-2 ring-blue-500/50"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <figure className="rounded-xl">
                <img src="/img/leader/leader.jpg" alt="Shoes" />
              </figure>
              <div className="card-body h-40 flex flex-col justify-center items-center">
                <h2 className="card-title text-xl lg:text-2xl text">
                  นายสมบัติ ธรรมนาถพงศ์
                </h2>
                <div className="text-center text-[16px] lg:text-xl">
                  ผู้อำนวยการ
                  <br />
                  วิทยาลัยเทคโนโลยีนาคประสิทธิ์ <br /> บริการธุรกิจ
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mt-4">
              <h2
                className="text-4xl lg:text-5xl font-bold text-cyan-700 text-center"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                วิสัยทัศน์
              </h2>
              <div
                className="text-center text-2xl lg:text-3xl mt-3 font-semibold text-cyan-600"
                data-aos="zoom-in"
                data-aos-delay="750"
              >
                สร้างเสริมคุณธรรม ก้าวนำการเรียนรู้ พัฒนาสู่มาตรฐานวิชาชีพ
              </div>
            </div>
            <div className="mt-4">
              <h2
                className="text-4xl lg:text-5xl font-bold text-cyan-700 text-center"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                ปรัชญา
              </h2>
              <div
                className="text-center text-2xl lg:text-3xl mt-3 font-semibold text-cyan-600"
                data-aos="zoom-in"
                data-aos-delay="750"
              >
                เรียนดี มีวินัย พลานามัยสมบูรณ์
              </div>
            </div>
            <div className="mt-4">
              <h2
                className="text-4xl lg:text-5xl font-bold text-cyan-700 text-center"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                อัตลักษณ์
              </h2>
              <div
                className="text-center text-2xl lg:text-3xl mt-3 font-semibold text-cyan-600"
                data-aos="zoom-in"
                data-aos-delay="750"
              >
                แต่งกายดี
              </div>
            </div>
            <div className="mt-4">
              <h2
                className="text-4xl lg:text-5xl font-bold text-cyan-700 text-center"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                เอกลักษณ์
              </h2>
              <div
                className="text-center text-2xl lg:text-3xl mt-3 font-semibold text-cyan-600"
                data-aos="zoom-in"
                data-aos-delay="750"
              >
                วิทยาลัยส่งเสริมอาชีพ
              </div>
            </div>
          </div>
        </div>
        {/* card */}
      </div>
    </div>
  );
};

export default Section;
