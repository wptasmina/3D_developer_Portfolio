import React from 'react'

export default function Navbar() {
    return (
        <header className='overflow-hidden py-3 shadow-lg  border-b border-gray-700 z-50'>
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-4xl font-bold'>
                    DEV.CODE
                </h1>
                <nav className='container mx-auto '>
                    <ul className='flex justify-center items-center gap-8 cursor-pointer'>
                        <a href="#" className='hover:text-[#a7a7a7]'>Home</a>
                        <a href="#" className='hover:text-[#a7a7a7]'>SERVICE</a>
                        <a href="#" className='hover:text-[#a7a7a7]'>FEATURES</a>
                    </ul>
                </nav>
                <button className='btn-signing bg-[#a7a7a7] text-black font-medium px-3 py-1 rounded-md cursor-pointer hover:bg-white'>Signin</button>
            </div>
        </header>
    )
}
