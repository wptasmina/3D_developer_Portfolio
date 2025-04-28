import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import DeveloperCard from './components/DeveloperCard'
import Portfolio3D from './components/Portfolio3D'


export default function App() {
    return (

    <div >
        <Navbar/>
        <Home />
        {/* <DeveloperCard /> */}
        <Portfolio3D />
    </div>

    )
}
