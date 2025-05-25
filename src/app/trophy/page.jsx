"use client";

import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../components/navbar/Navbar";

const trophy = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-4xl text-wrap animate-bounce font-bold text-blue-400">
            Coming soon....
          </h1>
        </div>
      </>
    </div>
  );
};

export default trophy;
