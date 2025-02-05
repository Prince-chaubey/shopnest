import React from 'react'

const Footer = () => {
  return (
    <div className='w-[full] bg-black p-10 grid gap-5 grid-cols-2 md:grid-cols-4'>
        <div className='m-5'>
        <p className='text-2xl font-semibold text-white'>Mech<span className='text-orange-500'>Shop</span></p>
        <p className='text-white text-xl'>© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>

        <div className='flex flex-col gap-5 m-5'>
            <h1 className='text-white text-3xl font-semibold'>Company</h1>
            <ul className='text-white flex flex-col gap-3'>
                <li>About</li>
                <li>Careers</li>
                <li>Team</li>
            </ul>
        </div>


        <div className='flex flex-col gap-5 m-5'>
            <div>
            <h1 className='text-white text-2xl font-semibold mb-4'>Contact Us</h1>
            <ul className='text-white flex flex-col gap-2'>
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
            </ul>
            </div>

            <div>
                <p className='text-white text-2xl font-semibold mb-3'>Legal</p>
                <ul className='text-white flex flex-col gap-3'>
                    <li>Term & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                    <li>Investor Relation</li>
                </ul>
            </div>
        </div>


        <div>
            <p className='text-2xl text-white font-semibold mb-3'>We Deliver to:</p>
            <ul className='text-white flex flex-col gap-3'>
                <li>Banglore</li>
                <li>Gurgaon</li>
                <li>Haryana</li>
                <li>Hydrabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
               
            </ul>
        </div>
      
    </div>
  )
}

export default Footer