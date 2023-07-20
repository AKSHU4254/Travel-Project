import React from 'react'
import Navbar from '../Components/Navbar';
import HeroImg from '../Components/HeroImg';
import Footer from '../Components/Footer';
// import SearchBox from '../Components/SearchBox';

const Home = () => {
  return (
    <div>
    <Navbar/>
   <HeroImg/>
  {/*<SearchBox/>*/}
    <Footer/>
    </div>
  )
}

export default Home;