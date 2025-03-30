import React from "react";
import Marquee from "react-fast-marquee";

const Activity = () => {
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
          <div className="divider divider-info text-4xl lg:text-6xl font-bold text-cyan-700">
            Activity
          </div>
          <div className="card rounded-box grid h-20 place-items-center"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center justify-center items-center bg-blue-300/40 rounded-2xl py-10 px-5 mt-10 ring-2 ring-blue-500/50">
          <div className="card bg-base-100 w-80 shadow-sm">
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
                <button className="btn btn-info text-white">ดูเพิ่มเติม</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-80 shadow-sm">
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
                <button className="btn btn-info text-white">ดูเพิ่มเติม</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-80 shadow-sm">
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
                <button className="btn btn-info text-white">ดูเพิ่มเติม</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="card rounded-box grid h-20 place-items-center"></div>
          <div className="divider divider-info text-4xl lg:text-6xl font-bold text-cyan-700">
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
        >
          <h2 className="text-center font-semibold text-white mb-5 text-3xl lg:text-4xl">
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
          <div className="text-center text-xl lg:text-2xl font-semibold bg-white rounded-2xl p-3 ring-blue-500/50 ring-2">
            <div className="text-slate-600 flex justify-evenly items-center space-x-5 mx-15 my-3">
              <span className="text-emerald-800 animate-pulse">
                <div
                  aria-label="success"
                  className="status status-success mr-3"
                ></div>
                25 มีนาคม 2568
              </span>
              <div className="">
                <div className="font-medium hover:underline hover:text-blue-400">
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
                <div className="font-medium hover:underline hover:text-blue-400">
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
                <div className="font-medium hover:underline hover:text-blue-400">
                  ประกาศผลสอบ นักเรียนชั้น ปวช.1 2 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
