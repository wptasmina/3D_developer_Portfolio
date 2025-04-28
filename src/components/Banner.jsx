import React from 'react'

export default function Banner() {
    return (
       <div className='grid grid-cols-2 gap-6'>
         <div className='container flex items-center justify-center min-h-screen flex-col'>
            <div className='content max-w-[40rem] ml-[10%] z-40'>
                <div className='tag-box relative'>
                    <div className='tag absolute flex justify-center items-center cursor-pointer hover:text-[#5300a0]'>INTRUCING &#x2A5F;</div>
                </div>
                <h1 className='text-4xl font-bold uppercase tracking-widest py-4' style={{ textShadow: '0 0 10px rgba(128, 128, 128, 0.418)' }}>Creative Frontend Engineer <br /> 3D Web Developer</h1>
                <p className='text-xl text-gray-400 tracking-wide max-w-[35rem] pb-4'>I specialize in building immersive 3D websites and interactive applications using React, Three.js, and modern web technologies.
                </p>

                <div className='buttons flex gap-4'>
                    <a href="#" className='border border-[#2a2a2a] text-[#5300a0] px-4 py-1 rounded-4xl font-medium hover:bg-[#1a1a1a] duration-300'>Documentation &gt;</a>
                    <a href="#" className='border border-[#2a2a2a] text-[#5300a0] bg-gray-50 px-4 py-1 rounded-4xl font-medium duration-300'>Getstart &gt;</a>
                </div>
            </div>
            </div>
            <div className='bg-transparent w-3/4'>
                <spline-viewer url="https://prod.spline.design/nS8C7Y7Noh9xsc3t/scene.splinecode"></spline-viewer>
            </div>
        
       </div>
    )
}
