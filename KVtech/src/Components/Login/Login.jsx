import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {ToastContainer} from 'react-toastify'
import { handleError } from "../../util";
// import Logo2 from "./Logo2.jpg";
import Logo3 from "./Logo3.png"
import Navbar from "../Navbar/Navbar";
function Login() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySingupInfo = { ...signupInfo };
    copySingupInfo[name] = value;
    setSignupInfo(copySingupInfo);
  };
  // console.log('setupInfo -> ', signupInfo);

  const handleSignup = async (e) => {
    e.preventDefault(); //to stop it from by the page refreshment
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("All feilds are Required.");
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <>
    
    
    <div className="flex pt-12 ">
      <div className="w-[55%]  items-center flex flex-col ">
        <div className="flex justify-start w-[50%] space-x-4">
          <img src={Logo3} alt="icon" className="w-72" />
        </div>
        <form onSubmit={handleSignup}>
        <h1 className="font-outfit text-[20px] text-start font-normal leading-[23.87px] text-left text-white pb-12">
          Please Enter your Account details
        </h1>
  

          <div className="flex flex-col pb-8">
            <label
              htmlFor="email"
              className="text-white font-outfit text-[20px] font-normal leading-[23.87px] text-left pb-4"
            >
              Email
            </label>
            <input
              className="w-[95%] px-2 py-2 rounded-2xl bg-[#8FA0B1] text-black placeholder-black focus:outline-0"
              onChange={handleChange}
              type="email"
              name="email"
              // placeholder="Enter your Email..."
              value={signupInfo.email}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-white font-outfit text-[20px] font-normal leading-[23.87px] text-left  pb-4"
            >
              Password
            </label>
            <input
              className="w-[95%] px-2 py-2 rounded-2xl bg-[#8FA0B1] text-black placeholder-black focus:outline-0"
              onChange={handleChange}
              type="password"
              name="password"
              // placeholder="Enter your Password..."
              value={signupInfo.password}
            />
          </div>
            <p className="font-outfit w-[95%] pr-2 text-[14px] font-normal pt-1 underline leading-[23.87px] text-right text-white hover:underline">Foget Password</p>

          <div className="justify-center item-center pt-8 ">
            <button
              type="submit"
              className="bg-[#1D3E64] border-none justify-center text-white text-lg rounded-2xl py-2 px-4 cursor-pointer item-center my-2 w-96"
            >
              Sign In
            </button>
          </div>

          <div className=" w-[95%] text-end">
            <Link to="/signup" className="text-white hover:underline font-outfit text-[14px]  font-normal leading-[23.87px] text-left">
              Create an Account
            </Link>
          </div>
        </form>
      </div>

      {/* Right Half  */}
      <div className="w-[45%]">
        <div className="w-[55%]  flex justify-center  pb-10 py-[42%] rounded-xl h-[90%] bg-gradient-to-br from-[#0D315C] to-[#728191] mt-10">
          <div className="w-full bg-white mx-4 my-4 rounded-xl shadow-lg p-6 flex flex justify-between items-center relative bottom-[-40px]">
            {/* Profile Image */}
            <div className="w-12 h-12 px-16 py-16 mb-12 bg-gray-500 rounded-full"></div>

            {/* Bio Text */}
            <div className="flex-col flex justify-start items-start">
            <p className="text-sm text-gray-700 text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              laoreet purus lacus, eget sodales velit lobortis quis. Quisque eget
              purus arcu. 
            </p>

            {/* Name and Designation */}
            <div className="mt-4 text-center">
              <p className="font-bold text-black">Name Name</p>
              <p className="text-gray-500 text-sm">Designation</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Login;

