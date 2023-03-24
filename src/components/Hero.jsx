import React from 'react'
import Typed from 'react-typed';
import ulm from '../assets/ulm_logo.png';



const Hero = () => {
  return (
    <div className=''>
        <img className='w-[180px] mx-auto my-6'src={ulm} alt="/" />

    <div className='text-[#3B0000]'>
        <div className='max-w-[800px] mt-[40px] md:text-6xl w-full h-auto mx-auto flex text-center flex-col justify-center'>
            <p className='text-[#812633] font-bold p-2'>
                Welcome to
            </p>
            <h1 className='md:text-7xl sm:text-6xl text=4xl font-bold md:py-6'>
                The Pre-Medical Advisory Committee
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-3xl text-[#812633] sm:text-2xl text-xl font-bold py-4'>
                    Application Preparation for
                </p>
                <Typed
                    className='flex md:text-3xl text-[#812633] sm:text-xl text-xl font-bold md:pl-4 pl-2' 
                    strings={['Pre-Medical','Pre-Dental']} 
                    typeSpeed={130} 
                    backSpeed={160} 
                    loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-black]'>
            Prepare for success and nail your application with our guidance.
            </p>
                <a href="/https://pmac-beta.vercel.app/">
                <button className='bg-[#9c9c9c] w-[200px] hover:drop-shadow-xl rounded-md text-lg my-6 mx-auto px-3 text-black'>Get Started</button>
                </a>
        </div>
    </div>
    </div>
  )
}

export default Hero