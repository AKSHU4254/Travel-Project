import React, { useState, useEffect } from 'react';
import './styles/SearchBoxStyle.css'; // You can create a CSS file for styling or add the styles directly in the component.

const Slideshow = () => {


  const [slideIndex, setSlideIndex] = useState(1);
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
  // Function to handle navigation to the next slide
  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  // Function to handle navigation to a specific slide
  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    // Ensure the slide index is within bounds when it changes
    const maxSlides = 3; // Replace with the actual number of slides
    if (slideIndex < 1) {
      setSlideIndex(1);
    } else if (slideIndex > maxSlides) {
      setSlideIndex(maxSlides);
    }
  }, [slideIndex]);


  {tour.map((val, ind) => {
  return (
    <div className="slideshow-container">
      {/* Slides */}
      <div className="mySlides fade" style={slideIndex === 1 ? {} : { display: 'none' }}>
        <div className="numbertext">1 / 3</div>
        <img src={val.productImg} style={{ width: '100%' }} alt="Slide 1" />
        <div className="text">Caption Text</div>
      </div>

      <div className="mySlides fade" style={slideIndex === 2 ? {} : { display: 'none' }}>
        <div className="numbertext">2 / 3</div>
        <img src="img2.jpg" style={{ width: '100%' }} alt="Slide 2" />
        <div className="text">Caption Two</div>
      </div>

      <div className="mySlides fade" style={slideIndex === 3 ? {} : { display: 'none' }}>
        <div className="numbertext">3 / 3</div>
        <img src="img3.jpg" style={{ width: '100%' }} alt="Slide 3" />
        <div className="text">Caption Three</div>
      </div>

      {/* Next and previous buttons */}
      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>

      {/* Dots/circles */}
      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
})}
};

export default Slideshow;
