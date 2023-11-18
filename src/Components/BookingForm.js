import React, { useState, useEffect } from "react";
import "./styles/BookingFormStyle.css"
import { useNavigate, useParams } from "react-router-dom";
import PaymentTab from "./PaymentTab";
import { loadStripe } from "@stripe/stripe-js";

const BookingForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adults, setAdults] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [noOfperson, setNoOfperson] = useState("");

  const [homepage, setHomepage] = useState([]);

  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const ExistingUser = user?.username;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        firstname,
        lastname,
        email,
        phone,
        adults,
        checkIn,
        checkOut,
        noOfperson,
        ExistingUser,
      };

      const response = await fetch(`http://localhost:4000/bookingform/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAdults("");
      setCheckIn("");
      setCheckOut("");
      setNoOfperson("");

      if (response.status === 201) {
        alert("Thank You For Your Booking");
        navigate("/tours");
      } else {
        console.log("Error While Sending Responce", responseData.error);
      }
      return true;
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51Na9rvSHRNCHtxTLcLc4ZjrEEWP87Mr5cCS66z6buY5XlzgILLWfhBOaiEKLVKx5jUjgswlWZgcfM3lYIie5n6Zo00iveHBAuz");

    const body = {
      products:[
       { firstname,
        lastname,
        email,
        phone,
      }]
      };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:4000/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      console.error("Error:", response.statusText);
      return;
    }

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  const navigate = useNavigate();

  const navigatehome = () => {
    navigate("/tours");
  };

  return (
    <>
      <div className="mask">
        {homepage.length > 0 && (
          <img
            className="into-img"
            src={`http://localhost:4000/${homepage[0].backgroundImg}`} // Assuming there's only one image URL in the data
            alt="AboutImage"
          />
        )}
      </div>
      <div class="booking-form-container">
        <form onSubmit={makePayment} class="booking">
          <h2>Tour Booking Form</h2>
          <div class="booking-details">
            <div class="booking-item">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
            </div>
            <div class="booking-item">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div class="booking-details">
            <div class="booking-item">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div class="booking-item">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div class="booking-details">
            <div class="booking-item">
              <label>No of persons</label>
              <input
                type="number"
                name="noOfperson"
                value={noOfperson}
                onChange={(e) => {
                  setNoOfperson(e.target.value);
                }}
              />
            </div>
            <div class="booking-item">
              <label>Adults</label>
              <input
                type="number"
                name="adults"
                value={adults}
                onChange={(e) => {
                  setAdults(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div class="booking-details">
            <div class="booking-item">
              <label>Check-In Date</label>
              <input
                type="date"
                name="checkIn"
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                }}
                required
              />
            </div>
            <div class="booking-item">
              <label>Check-Out Date</label>
              <input
                type="date"
                name="checkOut"
                value={checkOut}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="booking-details">
            <div className="booking-item">
              <input
                class="btn"
                type="submit"
                value="Submit"
                // onClick={makePayment}
              />
            </div>
            <div className="booking-item">
              <input
                class="btn"
                type="button"
                value="Cancal"
                onClick={navigatehome}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
