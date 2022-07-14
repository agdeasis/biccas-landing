import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white max-w-[1024px] mx-auto flex justify-between items-center h-24 px-4 '>
        <h1 className='w-full text-2xl font-bold text-[#54BD95] '>Biccass</h1>
        <ul className='text-[#A6A6A6] hidden md:flex font-medium'>
            <li className='p-4' >Home</li>
            <li className='p-4' >Product</li>
            <li className='p-4' >FAQ</li>
            <li className='p-4' >Blog</li>
            <li className='p-4'> About</li>
        </ul>
        <div>

        </div>
    </div>
  )
}

export default Navbar  