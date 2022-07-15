import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = ( () => [
        setNav(!nav)
    ])

  return (
    <header>
        <div className='text-white max-w-[1180px] mx-auto flex justify-between items-center h-24 px-4 '>
            <h1 className='w-full text-2xl font-bold text-[#54BD95] '>Biccass</h1>
            <ul className='text-[#A6A6A6] hidden md:flex items-center'>
                <li className='p-4 text-[#000]' >Home</li>
                <li className='p-4' >Product</li>
                <li className='p-4' >FAQ</li>
                <li className='p-4' >Blog</li>
                <li className='p-4'> About</li>
                <li className='p-4 ml-12'> Login</li>
                <li className='p-4 whitespace-nowrap'> <button className='rounded-md text-white bg-[#54BD95] p-2 pl-3 pr-3 ease-in duration-300 hover:bg-[#2F9870] '>Sign Up</button> </li>
            </ul>


            <div className='md:hidden'>
                { !nav ? <AiOutlineMenu color="#000"  onClick={ ()=> {handleNav();} } /> : <AiOutlineClose color="#000" onClick={ ()=> {handleNav();} }  /> }
            </div>

            <div className={ nav ? 'w-[60%] absolute top-0 left-0 z-1  bg-white mt-[0] drop-shadow-lg md:hidden h-full px-4' : 'hidden'}>
                <h1 className='w-full text-2xl font-bold text-[#54BD95] mt-5 mb-5 '>Biccass</h1>
                <ul className='text-[#A6A6A6] text-left'>
                    <li className='p-4 text-[#000]' >Home</li>
                    <li className='p-4' >Product</li>
                    <li className='p-4' >FAQ</li>
                    <li className='p-4' >Blog</li>
                    <li className='p-4'> About</li>
                    <li className='p-4'> Login</li>
                    <li className='p-4 whitespace-nowrap'> <button className='rounded-md text-white bg-[#54BD95] p-2 pl-3 pr-3 ease-in duration-300 hover:bg-[#2F9870]'>Sign Up</button> </li>
                </ul>
            </div>
        </div>
        <img src="./images/eclipsetop.svg" className='absolute z-1 top-0 left-0' alt="" />
        <img src="./images/eclipsebot.svg" className='absolute top-0 right-0' alt="" />

        </header>
  )
}

export default Navbar  