import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Tour from '../Components/Tour'

const Tours = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Popular Tours"/>
    <Tour/>
    <Footer/>
    </div>
  )
}

export default Tours