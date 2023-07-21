import "./FormStyles.css";
import Tower from "../assets/Ifeeltower.png";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [subject, setSubject]= useState("")
  const [message, setMessage]= useState("")

  console.log(name,email,subject,message)

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, subject, message };
      const response = await fetch("http://localhost:4000/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData)
    

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
     if (response.ok) {
        alert("Thank You For Your Responce");
      } else {
        console.log("Error While Sending Responce", data.error);
      }

    } catch (error) {
      console.log("Error:", error);
    }
    return true;
  };

  return (
    <div className="form-container">
      <div className="form-image">
        <img src={Tower} alt=""></img>
      </div>
      <div className="contact-page">
        <form onSubmit={handleSubmit}>
          <p>
            <label>Your Name</label>
          </p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <p>
            <label>Email</label>
          </p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <p>
            <label>Subject</label>
          </p>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            required
          />
          <p>
            <label>Message</label>
          </p>
          <textarea
            rows="6"
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          />
          <p>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
