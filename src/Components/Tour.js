import React, { useEffect, useState } from 'react'
import TourCard from './TourCard'
import "./TourCardStyle.css"

const Tour = () => {
  const [tour, setTour] = useState([]);
  console.log(tour);

  useEffect(() => {
    setPlaces();
  }, []);

  const setPlaces = async () => {
    try {
      const response = await fetch("http://localhost:4000/getTour", {
        headers: {
          Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setTour(data.products);
      } else {
        throw new Error("Error fetching About entries");
      }
    } catch (error) {
      console.error("Error fetching About entries:", error);
    }
  };
  return (
    <div>
        <h1 className='tour-heading'>Destination List</h1>
        <div className='tour-container'>
            {tour.map((val,ind)=>{
        return(
            <TourCard key={ind}
            productImg={val.productImg}
            details={val.details}
            price={val.price}/>
        )
    })}
    
    </div>
    </div>

  )
}

export default Tour;