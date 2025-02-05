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
        <p className='font-bold'>Shop<span className='text-orange-600'>Nest</span></p>

        <ul className='sm:flex gap-[20px] hidden'>
            <li>Home</li>
            <li>All Products</li>
            <li>Mens</li>
            <li>Kids</li>
        </ul>
        {
            Navbar?(<div className='absolute bg-white  top-[70px] left-[0px] w-full text-center flex justify-center items-center'>
                <ul className='mt-[100px]'>
                    <li className='m-[40px] text-3xl'>Home</li>
                    <li className='m-[40px] text-3xl'>All Products</li>
                    <li className='m-[40px] text-3xl'>Mens</li>
                    <li className='m-[40px] text-3xl'>Kids</li>
                </ul>
        
                </div>):""
        }
    
        <div className='flex gap-[20px]'>
        <FaCartShopping size={30}/>
        <RxHamburgerMenu size={30} className='sm:hidden block' onClick={ShowNavbar}/>
        </div>
      
    </div>
  )
}

export default Navbar