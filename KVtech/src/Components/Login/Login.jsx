import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
function Login() {
  return (

    <>
    <Navbar/>
   
    <div className="flex h-screen w-full">
      {/* Left half */}
      <div className="w-[45%] pt-28 pl-72 justify-center flex  bg-black">
        <div className="flex flex-col items-start ">
          <div className="pb-10 ">
            <button className="text-white px-10 py-4 rounded-full bg-[#363739]  focus:outline-0 font-outfit text-[24px] font-normal leading-[23.87px] text-left">
              Contact Us
            </button>
          </div>

          <h1 className="text-white font-outfit text-[35px] font-normal leading-[23.87px] text-left pb-10">
            How can we help you ?
          </h1>

          <p className="text-white font-outfit text-[20px] font-normal leading-[23.87px] text-left">
            You can fill the form or drop an email to <br />
          </p>
          <p className="text-white pb-6 font-outfit text-[20px] font-normal leading-[23.87px] text-left">
            vijay.singh@kodevortex.in
          </p>

          <div className="flex flex-col items-start space-y-6 pt-6 ">
            <button className="flex items-center bg-[#23565F] text-white rounded-full px-12 py-3.5 space-x-2">
              <FaGoogle className="text-xl" />
              <span>kodevortex</span>
            </button>

            <button className="flex items-center bg-[#23565F] text-white rounded-full  px-12 py-3.5  space-x-2">
              <FaInstagram className="text-xl" />
              <span>kodevortex</span>
            </button>

            <button className="flex items-center bg-[#23565F] text-white rounded-full px-12 py-3.5 space-x-2">
              <FaLinkedin className="text-xl" />
              <span>KodeVortex</span>
            </button>

            <button className="flex items-center bg-[#23565F] text-white rounded-full px-12 py-3.5 space-x-2">
              <FaTimes className="text-xl" />
              <span>KodeVortex</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right half */}
      <div className="w-[55%] pr-[28%] bg-black text-white flex pt-28 justify-center">
        <form className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="pb-2 text-start font-outfit text-[20px] font-normal leading-[23.87px] text-left"
            >
              Full Name
            </label>
            <input
              className="w-[200%] px-2 pl-10 py-2 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-0"
              type="text"
              name="name"
              autoFocus
              placeholder="Enter you Full Name"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="pb-2 text-start font-outfit text-[20px] font-normal leading-[23.87px] text-left"
            >
              Email Address
            </label>
            <input
              className="w-[200%] px-2 py-2 pl-10  rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-0"
              type="email"
              name="email"
              autoFocus
              placeholder="Enter you Email."
            />
          </div>

          <div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="pb-2 text-start font-outfit text-[20px] font-normal leading-[23.87px] text-left"
              >
                Phone Number
              </label>
              <input
                className="w-[200%] px-2 py-2 pl-10 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-0"
                type="password"
                name="password"
                autoFocus
                placeholder="Enter you Password."
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="pb-2 text-start font-outfit text-[20px] font-normal leading-[23.87px] text-leftfont-outfit text-[20px] font-normal leading-[23.87px] text-left"
            >
              Message
            </label>
            <textarea
              name="message"
              className="w-[200%] px-2 h-32 py-2 pl-10 rounded-2xl bg-[#B8B8B8] text-black placeholder-black focus:outline-0"
              id=""
              placeholder="Enter Your Text Here"
            ></textarea>
          </div>

          <div className="flex justify-start gap-x-3">
            <input type="checkbox" name="policy" id="policy" />
            <label htmlFor="policy">
              I agree to your{" "}
              <span className="text-blue-500">Privacy Policy</span> terms.
            </label>
          </div>

          <div className=" w-[200%]">
            <button
              type="submit "
              className="w-full py-2.5 rounded-3xl bg-[#0D315C]"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
