import "./styles/GallaryDataStyles.css";
import React, { useEffect, useState } from "react";

const Places = () => {
  const [destination, setDestination] = useState([]);

  // console.log(destination);

  useEffect(() => {
    setPlaces();
  }, []);

  const setPlaces = async () => {
    try {
      const response = await fetch("http://localhost:4000/gallary", {
        headers: {
          Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setDestination(data.products);
      } else {
        throw new Error("Error fetching About entries");
      }
    } catch (error) {
      console.error("Error fetching About entries:", error);
    }
  };
  return (
    <div>
      <h1 className="places-heading"> Places You Must Visit</h1>
      <div className="places-container">
        {destination.map((val, ind) => {
          return (
            <div className="gallary-card">
              <img
                src={`http://localhost:4000/${val.gallaryImg}`}
                alt="AboutImage"
                height={150}
                width={200}
              />
              <div className="card-title">{val.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Places;
