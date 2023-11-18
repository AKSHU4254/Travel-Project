import React, { useEffect, useState } from "react";
import "./styles/TourCardStyle.css";
import { Link } from "react-router-dom";

const Tour = () => {
  const [tour, setTour] = useState([]);

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
      <h1 className="tour-heading">Destination List</h1>
      <div className="tour-container">
        {tour.map((val, ind) => {
          return (
            <div className="tour-card">
              <div>
                <Link to={`/tourdetails/${val._id}`}>
                  <img
                    src={`http://localhost:4000/${val.productImg}`}
                    alt="AboutImage"
                  />
                </Link>
              </div>
              <div className="tour-card-item">
                <h3 className="tour-details">{val.name}</h3>
                <span className="tour-details">Click For More</span>
                <div className="pro-btns">
                  <div>
                    <p className="tour-details">₹ {val.price}/Per Person</p>
                  </div>
                  <div>
                    <Link to={`/bookingform/${val.name}`} className="btn">
                      BookNow
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tour;
