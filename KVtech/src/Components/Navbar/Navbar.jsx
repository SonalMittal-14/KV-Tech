import React from 'react';
import { IoSearch } from "react-icons/io5";
import Logo3 from "./Logo3.png"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='flex items-center h-24  space-x-4  p-4'>
      <img src={Logo3} alt=""  className='w-72'/>

      <div className='relative flex-1'>
        <form action="/action_page.php" className='flex items-center'>
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-2xl" />
          <input className='bg-zinc-800 w-[80%] text-white text-2xl rounded-lg pl-10 py-2 w-96' type="text" placeholder="What do you want to learn today?" name="search" />
        </form>
      </div>

      <ul className="flex space-x-4 list-none text-2xl font-sans">
        <li className="text-white">Trainings</li>
        <li className="text-white">Services</li>
      </ul>

      <Link to="/login" className=' text-2xl text-white font-semibold '>Log In</Link>
        {/* <li className="text-white">Log In</li> */}

  

      <Link to="/signup" className="bg-[#056777] hover:bg-cyan-950 text-2xl text-white font-bold py-2 px-4 rounded-full">
        Sign Up
      </Link>
    </div>
  );
}

export default Navbar;
 