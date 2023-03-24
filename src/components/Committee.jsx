import React from 'react'


function committee() {

  return (
    <div className='w-full bg-[#bcbcbc] py-16 px-4 mt-[140px]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            
            <div className='flex flex-col justify-center'>
                <p className='text-[#3B0000] font-bold uppercase'>
                Our Purpose
                </p>
                <h1 className='md:text-4xl sm:text-3xl text:2xl font-bold py-2'>
                Empowering pre-med students
                </h1>
                <p className=''>
                Join forces with ULM's Pre-Medical Advisory Committee, 
                a dedicated group of faculty members from across campus. 
                Our faculty provide personalized guidance and support to 
                pre-medical students during their junior and senior year, 
                helping them prepare for a successful medical school application 
                process.
                </p>
            </div>
        </div>
    </div>
  )
}

export default committee