import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [Navbar,setNavbar]=useState(false);
    const ShowNavbar=()=>{
         setNavbar(!Navbar)
    }
    
  return (
    <div className='flex gap-2 text-2xl justify-between font-semibold p-[20px] border-white shadow-lg relative w-full'>
        <p className='font-bold cursor-pointer'>Shop<span className='text-orange-600'>Nest</span></p>

        <ul className='sm:flex gap-[20px] hidden'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>All Products</li>
            <li className='cursor-pointer'>Mens</li>
            <li className='cursor-pointer'>Kids</li>
        </ul>
        {
            Navbar?(<div className='absolute bg-white  top-[70px] left-[0px] w-full text-center flex justify-center items-center text-2xl'>
                <ul className='mt-[100px]'>
                    <li className='m-[40px] text-3xl cursor-pointer'>Home</li>
                    <li className='m-[40px] text-3xl cursor-pointer'>All Products</li>
                    <li className='m-[40px] text-3xl cursor-pointer'>Mens</li>
                    <li className='m-[40px] text-3xl cursor-pointer'>Kids</li>
                </ul>
        
                </div>):""
        }
    
        <div className='flex gap-[20px]'>
        <FaCartShopping size={30} className='cursor-pointer'/>
        <RxHamburgerMenu size={30} className='sm:hidden block cursor-pointer' onClick={ShowNavbar}/>
        </div>
      
    </div>
  )
}

export default Navbar