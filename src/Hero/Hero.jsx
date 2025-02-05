import React from 'react'
import hero from "../assets/hero.jpg"

const Hero = () => {
  return (
    <div className='p-[15px]'>
      <img src={hero} alt="main hero" className='rounded-md' />
    </div>
  )
}

export default Hero