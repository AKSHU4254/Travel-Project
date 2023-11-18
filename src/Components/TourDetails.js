import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/TourdetailsStyle.css";

const TourDetails = () => {
  const [tourImage, setTourImage] = useState("");
  const [tourName, setTourName] = useState("");
  const [tourPrice, setTourPrice] = useState("");
  const [tourDetails, setTourDetails] = useState("");
  const [tourRating, setTourRating] = useState("");

  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    getTourDetails();
  }, []);

  const getTourDetails = async () => {
    try {
      let result = await fetch(`http://localhost:4000/tourdetails/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      result = await result.json();
      console.log(result);
      setTourImage(result.productImg);
      setTourName(result.name);
      setTourPrice(result.price);
      setTourDetails(result.details);
    } catch (error) {
      console.error("Error retrieving tour details:", error);
    }
  };

  return (
    <div className="container">
      <div>
      <div className="box">
        <div className="tour_img">
          {tourImage && (
            <img
              src={`http://localhost:4000/${tourImage}`}
              alt=""
              height={300}
              width={400}
            />
          )}
          <h2>{tourName}</h2>
          <div className="box-item">
            <div>
              <h2>Reviews</h2>
            </div>
            <div>
              <form>
                <span onClick={() => setTourRating(1)}>
                  1 <i class="fa-regular fa-star"></i>
                </span>
                <span onClick={() => setTourRating(2)}>
                  2 <i class="fa-regular fa-star"></i>
                </span>
                <span onClick={() => setTourRating(3)}>
                  3 <i class="fa-regular fa-star"></i>
                </span>
                <span onClick={() => setTourRating(4)}>
                  4 <i class="fa-regular fa-star"></i>
                </span>
                <span onClick={() => setTourRating(5)}>
                  5 <i class="fa-regular fa-star"></i>
                </span>
              </form>
            </div>
          </div>
        </div>
        <div className="tour_details">
          <h2>Tour Details</h2>
          <div className="calculation">
            <p style={{ backgroundColor: "grey" }}>
              No. Of Person
              <h3>₹{tourPrice}/Per Person</h3>
            </p>
          </div>
          <div className="total">
            <h2>Total</h2>
          </div>
        </div>
        </div>
        </div>
      <div className="tour_info">
        <h2>Description</h2>
        <span>{tourDetails}</span>
      </div>
    </div>
  );
};

export default TourDetails;
