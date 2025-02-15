import React from 'react'
import hero from "../assets/hero.jpg"

const Hero = () => {
  return (
    <div className='pt-[105px] px-[20px]'>
      <img src={hero} alt="main hero" className='rounded-md' />
    </div>
  )
}

export default Hero