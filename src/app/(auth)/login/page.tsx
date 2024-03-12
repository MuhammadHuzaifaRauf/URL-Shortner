"use client";

import Image from "next/image";

import link from "../../../../public/assets/images/Linkly.png";
import look from "../../../../public/assets/images/Look.png";
import google from "../../../../public/assets/images/Google.png";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="w-full h-[200px] flex flex-col justify-between items-center">
      <div className="py-8">
        <Image src={link} alt="" />
      </div>
      <div className="py-8">
        <Image
          className="w-[350px] sm:w-[450px]  md:w-[550px]"
          src={look}
          alt=""
        />
      </div>
      <div>
        <p className="font-extralight flex flex-wrap w-[390px] sm:w-[480px] md:w-[634px] text-[16px] text-[#C9CED6]">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
      </div>
      <div className=" flex flex-col gap-[32px] py-8  items-center">
        <input
          type="text"
          placeholder="Enter your email here"
          className="w-[380px]  sm:[450px]  md:w-[500px] h-[55px] border rounded-[48px] border-[#353C4A] py-2 px-6 bg-[#181E29]"
        />

        <input
          type="text"
          placeholder="Enter your password here"
          className="w-[380px]  sm:[490px]  md:w-[500px] h-[55px] py-2 px-6 border rounded-[48px] border-[#353C4A] bg-[#181E29]"
        />
      </div>
      <button className="w-[200px] bg-[#144EE3] h-[50px]  border rounded-[48px] border-[#144EE3] text-white font-semibold cursor-pointer px-6 py-2 relative">
        Login
      </button>
      <div className="py-6">
        <p className="text-[#C9CED6]">
          <Link href="/register">
            <span className="text-[#144EE3] underline text-[18px] gap-2">
              Register
            </span>
          </Link>{" "}
          if not already registered
        </p>
      </div>
      <p className="text-[#C9CED6] flex flex-row items-center mb-10"> OR</p>
      <div>
        <button
          onClick={() => signIn("google")}
          className="flex items-center gap-4 shadow-md mb-5 shadow-[#585454] rounded-lg pl-3"
        >
          <Image src={google} height={30} width={30} alt="" />
          <span className="bg-[#144ee3] text-white rounded-lg px-4 py-3">
            SignIn with Google
          </span>
        </button>
      </div>
    </div>
  );
}
