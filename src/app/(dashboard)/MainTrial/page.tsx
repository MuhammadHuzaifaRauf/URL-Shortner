"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import look from "../../../../public/assets/images/Linkly.png";
import link from "../../../../public/assets/images/Look.png";
import arrow from "../../../../public/assets/images/Arrow.png";

export default function MainTrial() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gaib = "hidden";

  return (
    <>
      <div className="w-full h-[120px] flex flex-row justify-between">
        <div className="py-8 px-6">
          <Image src={look} alt="" />
        </div>
        <div className=" flex flex-row py-8 gap-6">
          <button className="text-white w-[90px] h-[46px] flex items-center gap-4 shadow-md mb-5 border rounded-[48px] border-[#353C4A] bg-[#181E29] pl-5 mt-1">
            Login
          </button>
          <div className={`flex flex-col items-center ${gaib} msw:block`}>
            <button className="w-[140px] bg-[#144EE3] h-[50px] border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer px-6 py-2 relative shadow-md hidden sm:block">
              Register
            </button>
          </div>
        </div>
      </div>

      <div className="py-8 flex flex-row justify-center items-center">
        <Image
          className="w-[350px] sm:w-[450px]  md:w-[550px]"
          src={link}
          alt=""
        />
      </div>
      <div className="flex flex-row justify-center items-center">
        <p className="font-extralight flex flex-wrap w-[390px] sm:w-[480px] md:w-[634px] text-[16px] text-[#C9CED6]">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
      </div>
      <div className="max-w-[659px] mx-auto max-h-[76px] my-[46px] border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row px-8">
        <input
          type="text"
          placeholder="Enter your link here"
          className="w-full sm:w-[450px] outline-none bg-[#181E29] h-[55px] rounded-[48px] text-white py-2"
        />
        {isSmallScreen ? (
          <Image
            src={arrow}
            className="h-[116px] w-[156px] px-6 py-2 "
            alt=""
          />
        ) : (
          <button className=" w-[76px]  sm:w-[176px] md:w-[176px] bg-[#144EE3] h-[50px] border rounded-[48px] border-[#144EE3] text-white font-semibold cursor-pointer px-6 py-2 relative">
            Shorten Now
          </button>
        )}
      </div>

      <div className="max-w-[659px] mx-auto max-h-[76px] my-[46px]  items-center flex flex-row justify-center px-8">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Auto paste from clipboard
          </span>
        </label>
      </div>
      <div className="max-w-[659px] mx-auto max-h-[76px] my-[46px]  items-center flex flex-row justify-center px-8">
        <p className="text-white font-extralight text-[14px]">
          You can create <span className="text-[#e63946]">05</span> more links.
          Register Now to enjoy Unlimited usage
        </p>
      </div>
      <div className="flex flex-col items-center msw:hidden">
        <p className="text-sm text-gray-500 mt-2 ">Explore More</p>
      </div>
    </>
  );
}
