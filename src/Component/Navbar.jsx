import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <div className='w-full shadow-lg bg-white '>
            <div className='flex justify-between items-center p-5 md:px-10'>
                {/* Logo */}
                <Link to='/' className='text-3xl font-bold cursor-pointer'>
                    Shop<span className='text-orange-600'>Nest</span>
                </Link>

                {/* Desktop Menu */}
                <ul className='hidden sm:flex gap-8 text-lg '>
                    <li><Link to='/' className='hover:text-orange-600'>Home</Link></li>
                    <li><Link to='/allproducts' className='hover:text-orange-600'>All Products</Link></li>
                    <li><Link to='/mens' className='hover:text-orange-600'>Mens</Link></li>
                    <li><Link to='/kids' className='hover:text-orange-600'>Kids</Link></li>
                </ul>

                {/* Right Side Icons */}
                <div className='flex items-center gap-2'>
                   <Link to="/login">
                   <button className='bg-gray-200 px-4 py-1 rounded-md text-lg font-medium hover:bg-gray-300 cursor-pointer'>
                        Login
                    </button>
                   </Link>
                    <Link to='/cart' >
                        <FaCartShopping size={30} className='cursor-pointer hover:text-orange-600 sm:block hidden' />
                    </Link>
                    <RxHamburgerMenu
                        size={30}
                        className='sm:hidden block cursor-pointer'
                        onClick={toggleNavbar}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            {navbarOpen && (
                <div className='absolute top-16 left-0 w-full  bg-white text-center shadow-md sm:hidden'>
                    <ul className='py-6 space-y-6 text-xl font-semibold'>
                        <li><Link to='/' className='block' onClick={toggleNavbar}>Home</Link></li>
                        <li><Link to='/allproducts' className='block' onClick={toggleNavbar}>All Products</Link></li>
                        <li><Link to='/mens' className='block' onClick={toggleNavbar}>Mens</Link></li>
                        <li><Link to='/kids' className='block' onClick={toggleNavbar}>Kids</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};


export default Navbar;
