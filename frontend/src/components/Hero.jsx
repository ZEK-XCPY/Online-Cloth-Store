import React from 'react'
import { assets } from '../assets/assets'
import HeroImage from "../assets/HeroModel.png"
const Hero = ({image}) => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 min-h-100'>
        {/* Hero left Side */}
        <div className='w-full bg-black sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-white'>
                <div className='flex items-center gap-2 '>
                    <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p> 
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>     
                </div>
                <h1 className="prata-regular  text-3xl sm:py-3 lg:text-5xl leading-relaxed">Our Best Collection</h1>
                <div className='flex items-center gap-2'>
                  <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                  <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p> 
                </div>
            </div>
        </div>
        {/* Hero right side */}
        <img className=' w-full sm:w-1/2 h-[200] object-cover' src={HeroImage} alt="" />
    </div>
  )
}

export default Hero