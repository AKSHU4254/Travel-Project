import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Destinations from "./routes/Destinations";
import Tours from "./routes/Tours";
import About from "./routes/About";



import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destinations' element={<Destinations/>}/>
      <Route path='/tours' element={<Tours/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
