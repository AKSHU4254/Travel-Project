import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Destinations from "./routes/Destinations";
import Tours from "./routes/Tours";
import Login from "./routes/Login";
import UserProfile from "./Components/UserProfile";




import { Route, Routes } from "react-router-dom";
import PrivateComp from "./Components/PrivateComp";
import BookingForm from "./Components/BookingForm";
import Success from "./Components/Success";
import Cancal from "./Components/Cancal";
import TourDetails from "./Components/TourDetails";



function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destinations' element={<Destinations/>}/>
      <Route path='/tours' element={<Tours/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/success' element={<Success/>}></Route>
      <Route path='/cancal' element={<Cancal/>}></Route>
      <Route path='/tourdetails/:id' element={<TourDetails/>}></Route>



      <Route element={<PrivateComp/>}>
      <Route path='/userprofile' element={<UserProfile/>}/>
      <Route path='/bookingform/:id' element={<BookingForm/>}/>
  


      </Route>
      </Routes>
    </div>
  );
}

export default App;
