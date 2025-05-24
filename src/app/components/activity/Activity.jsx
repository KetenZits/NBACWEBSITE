"use client";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "../countup/Countup";

const Activity = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาของแอนิเมชัน (ms)
      once: false, // ให้เล่นซ้ำเมื่อเลื่อนกลับมา
      mirror: true, // เล่นซ้ำแม้ว่าองค์ประกอบจะออกจากหน้าจอแล้วกลับมา
    });
  }, []);

  return (
    <div>
      <Marquee
        autoFill
        speed={75}
        gradient={true}
        gradientColor="#ffffff"
        className="relative top-14"
      >
        <div className="mx-5">
          <img src="/img/marquee/marquee1.jpg" alt="" />
        </div>
        <div className="mx-5">
          <img src="/img/marquee/marquee2.png" alt="" />
        </div>
        <div className="mx-5">
          <img
            src="/img/marquee/marquee3.png"
            alt=""
            className="max-w-[150px]"
          />
        </div>
      </Marquee>
      <div className="container max-w-[1320px] mx-auto py-10">
        <div className="flex w-full flex-col">
          <div className="card rounded-box grid h-20 place-items-center"></div>
          <div
            className="divider divider-info text-4xl lg:text-6xl font-bold text-cyan-700"
            data-aos="fade-up"
          >
            Activity
          </div>
          <div className="card rounded-box grid h-20 place-items-center"></div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center justify-center items-center bg-blue-300/40 rounded-2xl py-10 px-5 mt-10 ring-2 ring-blue-500/50"
          data-aos="zoom-in"
        >
          <div
            className="card bg-base-100 w-80 shadow-sm ring-2 ring-pink-500/50"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <figure className="px-10 pt-10">
              <img
                src="/img/activity/activity1.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">กิจกรรมเข้าค่ายลูกเสือ</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions mt-3">
                <button className="btn btn-info text-white hover:btn-error">
                  ดูเพิ่มเติม
                </button>
              </div>
            </div>
          </div>

          <div
            className="card bg-base-100 w-80 shadow-sm ring-2 ring-pink-500/50"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <figure className="px-10 pt-10">
              <img
                src="/img/activity/activity2.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">กิจกรรมปัจฉิมนิเทศ</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions mt-3">
                <button className="btn btn-info text-white hover:btn-error">
                  ดูเพิ่มเติม
                </button>
              </div>
            </div>
          </div>

          <div
            className="card bg-base-100 w-80 shadow-sm ring-2 ring-pink-500/50"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <figure className="px-10 pt-10">
              <img
                src="/img/activity/activity3.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">กิจกรรมวันเด็กแห่งชาติ</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions mt-3">
                <button className="btn btn-info text-white hover:btn-error">
                  ดูเพิ่มเติม
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="card rounded-box grid h-20 place-items-center"></div>
          <div
            className="divider divider-info text-4xl lg:text-6xl font-bold text-cyan-700"
            data-aos="fade-up"
          >
            Announcement
          </div>
          <div className="card rounded-box grid h-20 place-items-center"></div>
        </div>

        <div
          className="
          bg-[url(/img/banner/banner.jfif)] 
          bg-cover
          bg-fixed
          bg-center bg-no-repeat
          px-5
          py-7
          rounded-2xl
          "
          data-aos="zoom-in"
        >
          <h2
            className="text-center font-semibold text-white mb-5 text-3xl lg:text-4xl"
            data-aos="fade-down"
          >
            <div
              aria-label="info"
              className="status status-primary mr-5 animate-ping"
            ></div>
            ข่าวประชาสัมพันธ์
            <div
              aria-label="info"
              className="status status-primary ml-5 animate-ping"
            ></div>
          </h2>
          <div
            className="text-center text-xl lg:text-2xl font-semibold bg-white rounded-2xl p-3 ring-blue-500/50 ring-2"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="text-slate-600 flex justify-evenly items-center space-x-5 mx-15 my-3">
              <span className="text-emerald-800 animate-pulse">
                <div
                  aria-label="success"
                  className="status status-success mr-3"
                ></div>
                25 มีนาคม 2568
              </span>
              <div className="">
                <div className="font-medium hover:underline hover:text-blue-400 text-left">
                  ประกาศผลสอบ นักเรียนชั้น ปวช.1 2 3
                </div>
              </div>
            </div>
            <div className="text-slate-600 flex justify-evenly items-center space-x-5 mx-15 my-3">
              <span className="text-emerald-800 animate-pulse">
                <div
                  aria-label="success"
                  className="status status-success mr-3"
                ></div>
                25 มีนาคม 2568
              </span>
              <div className="">
                <div className="font-medium hover:underline hover:text-blue-400 text-left">
                  ประกาศผลสอบ นักเรียนชั้น ปวช.1 2 3
                </div>
              </div>
            </div>
            <div className="text-slate-600 flex justify-evenly items-center space-x-5 mx-15 my-3">
              <span className="text-emerald-800 animate-pulse">
                <div
                  aria-label="success"
                  className="status status-success mr-3"
                ></div>
                25 มีนาคม 2568
              </span>
              <div className="">
                <div className="font-medium hover:underline hover:text-blue-400 text-left">
                  ประกาศผลสอบ นักเรียนชั้น ปวช.1 2 3
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex w-full flex-col">
            <div className="card rounded-box grid h-20 place-items-center"></div>
            <div
              className="divider divider-info text-4xl lg:text-6xl font-bold text-cyan-700"
              data-aos="fade-up"
            >
              Status
            </div>
            <div className="card rounded-box grid h-20 place-items-center"></div>
          </div>

          <div
            className="stats stats-vertical lg:stats-horizontal shadow-xl mx-5 h-[250px]"
            data-aos="fade-up"
          >
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <div className="stat-title">นักเรียนชาย</div>
              <div className="stat-value text-primary text-4xl">
                <CountUp
                  from={0}
                  to={157}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
              </div>
              <div className="stat-desc">Total Men</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <div className="stat-title">นักเรียนหญิง</div>
              <div className="stat-value text-secondary text-4xl">
                <CountUp
                  from={0}
                  to={66}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
              </div>
              <div className="stat-desc">Total Woman</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online"></div>
              </div>
              <div className="stat-figure">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <div className="stat-title">นักเรียนทั้งหมด</div>
              <div className="stat-value text-4xl">
                <CountUp
                  from={0}
                  to={223}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
              </div>
              <div className="stat-desc text-secondary">Total All</div>
              <div className="stat-desc text-secondary">
                {" "}
                <div
                  aria-label="secondary"
                  className="status status-secondary mr-3"
                ></div>
                ข้อมูลจากปีการศึกษา 2567
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
