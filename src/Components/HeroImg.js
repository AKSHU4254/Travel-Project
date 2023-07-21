import "./HeroImgStyle.css";

import React, { useEffect, useState } from "react";

const HeroImg = () => {
  const [homepage, setHomepage] = useState([]);

  useEffect(() => {
    setPlaces();
  }, []);

  const setPlaces = async () => {
    try {
      const response = await fetch("http://localhost:4000/homepage", {
        headers: {
          Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setHomepage(data.products);
      } else {
        throw new Error("Error fetching About entries");
      }
    } catch (error) {
      console.error("Error fetching About entries:", error);
    }
  };

  return (
    <div className="hero">
      <div className="mask">
        {homepage.length > 0 && (
          <img
            className="into-img"
            src={`http://localhost:4000/${homepage[0].backgroundImg}`} // Assuming there's only one image URL in the data
            alt="AboutImage"
          />
        )}
      </div>
      <div className="content">
        <div>
          { homepage.map((item) => (
              <div key={item._id}>
                <h3>{item.text}</h3>
                <h1>{item.title}</h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
