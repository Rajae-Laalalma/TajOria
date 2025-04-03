import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { PiList } from "react-icons/pi"; 
import { IoClose } from "react-icons/io5";  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className=" bg-transparent h-24 text-xl flex justify-between items-center px-6 md:px-20 font-Playfair">
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <PiList />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <NavLink to="/" >Home
          <hr className='border border-gray-500 hidden  ' />
          </NavLink>
         
          <NavLink to="/shop" className="">Shop
          <hr className='border border-gray-500 hidden  ' /></NavLink>
          <NavLink to="/blog" className="">Blog
          <hr className='border border-gray-500 hidden  ' /></NavLink>
          <NavLink to="/contact" className="">Contact
          <hr className='border border-gray-500 hidden  ' /></NavLink>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl">
          <h1>Tajoria</h1>
        </div>

        {/* Icons */}
        <div className=" flex gap-4">
          <IoSearch className="cursor-pointer" size={25} />
          <Link to="/shop" className="relative">
            <BsCart3 className="cursor-pointer" size={25} />
            <p className="absolute -right-1 -bottom-0.5 w-4 text-center leading-3 bg-black text-white aspect-square rounded-full text-[10px]">10</p>
          </Link>
          <div className="group relative">
            <CgProfile className="cursor-pointer" size={25} />
            <div className="group-hover:block hidden absolute right-0 pt-4">
              <div className="flex flex-col text-sm gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-white py-4 shadow-md font-Playfair">
          <NavLink to="/" className="" onClick={() => setMenuOpen(false)}>Home
          <hr className='border border-gray-500 hidden  ' /></NavLink>
          <NavLink to="/shop" className="" onClick={() => setMenuOpen(false)}>Shop
          <hr className='border border-gray-500 hidden  ' /></NavLink>
          <NavLink to="/blog" className="" onClick={() => setMenuOpen(false)}>Blog
          <hr className='border border-gray-500 hidden  ' /></NavLink>
          <NavLink to="/contact" className="" onClick={() => setMenuOpen(false)}>Contact
          <hr className='border border-gray-500 hidden  ' /></NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
