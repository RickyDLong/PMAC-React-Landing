 import React, {useState} from 'react'
 import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
 
 const Navbar = () => {
    const[nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

   return (
     <div className='flex justify-between items-center h-10 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-3xl font-bold text-ulm_maroon'>ULM</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Faculty</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r z-40 border-stone-900 bg-[#ffffff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#000000] m-4'>ULM</h1>
            <ul className='uppercase p-4 border-b border-stone-900'>
                <li className='p-4 border-b border-stone-900'>Home</li>
                <li className='p-4 border-b border-stone-900'>Faculty</li>
                <li className='p-4 border-b border-stone-900'>Resources</li>
                <li className='p-4 border-b border-stone-900'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
     </div>
   )
 }
 
 export default Navbar