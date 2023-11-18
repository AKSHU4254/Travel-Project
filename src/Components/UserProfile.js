import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [homepage, setHomepage] = useState([]);

  useEffect(() => {
    setbackground();
  }, []);

  const setbackground = async () => {
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
    <div>
      <div className="mask">
        {homepage.length > 0 && (
          <img
            className="into-img"
            src={`http://localhost:4000/${homepage[0].backgroundImg}`} // Assuming there's only one image URL in the data
            alt="AboutImage"
          />
        )}
      </div>
      <div>
      <button></button></div>
    </div>
  );
};

export default UserProfile;