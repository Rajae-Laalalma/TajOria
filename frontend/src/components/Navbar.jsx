import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";



const Navbar = () => {



  return (
    <div >
      <div className=''></div>
      <div className='  bg-transparent h-24 text-xl flex justify-between items-center  px-20 font-Playfair'>
        <div className='hidden md:flex gap-10   '>
          <NavLink to='/Home'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/Shop'>
            <p>Shop</p>
          </NavLink>
          <NavLink to='/Blog'>
            <p>Blog</p>
          </NavLink>
          <NavLink to='/Contact'>
            <p>Contact</p>
          </NavLink>
       

        </div>
        <div className='absolute left-1/2 transform -translate-x-1/2 text-2xl  '>
          <h1>Tajoria</h1>
        </div>
        <div className='hidden md:flex gap-4  '>
          <IoSearch className='cursor-pointer' size={25 } />

          <Link to='/Shop' className='relative'>
          <BsCart3 className='cursor-pointer' size={25 } />
         <p className=' absolute -right-1 -bottom-0.5 w-4  text-center leading-3  bg-black text-white aspect-square rounded-full text-[10px]'>10</p>
         </Link>
          <div className='group relative'>
            <CgProfile className='cursor-pointer' size={25 } />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
              <div className='flex flex-col text-sm gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded font-sans '>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>

    </div>
  )
}

export default Navbar
