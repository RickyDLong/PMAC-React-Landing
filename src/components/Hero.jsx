import React from 'react'
import ulm from '../assets/ulm_logo.png';
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    <div className=''>
        <img className='w-[180px] mx-auto my-12'src={ulm} alt="/" />

    <div className='text-[#3B0000]'>
        <div className='max-w-[800px] mt-[70px] md:text-6xl w-full h-auto mx-auto flex text-center flex-col justify-center'>
            <p className='text-[#812633] font-bold p-2'>
                Welcome to
            </p>
            <h1 className='md:text-7xl sm:text-6xl text=4xl font-bold md:py-6'>
                The Pre-Medical Advisory Committee
            </h1>
            <div className='flex justify-center items-center'>
                <span className='md:text-3xl text-[#812633] sm:text-2xl text-xl font-bold py-4'>
                    <span>Application Preparation for</span>{' '} 
                    <TypeAnimation
                    sequence={[
                    'Pre-Medical',
                    2000,
                    'Pre-Dental',
                    2000,
                    ]}
                    repeat={Infinity}
                    speed={20}
                    />
                </span>
            </div>
            <p className='md:text-2xl text-xl font-bold text-black]'>
            Prepare for success and nail your application with our guidance.
            </p>
                <a href="https://pmac-beta-opnaptos3-prabinbasnet09.vercel.app/">
                <button className='bg-[#9c9c9c] w-[200px] rounded-md text-lg my-6 mx-auto font-bold px-2 text-ulm_red'>
                Get Started
                </button>
                </a>
        </div>
    </div>
    </div>
  )
}

export default Hero