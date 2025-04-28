import React from 'react'
import Banner from '../../components/Banner'



export default function Home() {
  return (
    <>
    <div className='container'>
        <img src="/gradient.png" alt="gradient" className='image-gradient' />
        <div className='layer-blur'></div>

        {/* Banner  */}
        <Banner />
    </div>
    </>
  )
}
