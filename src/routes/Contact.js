import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import HeroImg2 from '../Components/HeroImg2'


const Contact = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Any Question?" caption="Feel Free to Contact our Team..!"/>
    <Form/>
    <Footer/>
    </div>
    
  )
}

export default Contact