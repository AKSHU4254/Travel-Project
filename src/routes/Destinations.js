import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg2 from '../Components/HeroImg2'
import Footer from '../Components/Footer'
import Places from '../Components/Places'

const Destinations = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Destinations"/>
    <Places/>
    <Footer/>
    </div>
  )
}

export default Destinations;