import React from 'react'
import Navbar from '../Components/Navbar';
import HeroImg from '../Components/HeroImg';
import Footer from '../Components/Footer';
import SearchBox from '../Components/SearchBox';
import Card from '../Components/Card';

const Home = () => {
  return (
    <div>
    <Navbar/>
   <HeroImg/>
   <Card/>
  <SearchBox/>
    <Footer/>
    </div>
  )
}

export default Home;