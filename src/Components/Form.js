import "./FormStyles.css";
import Tower from "../assets/Ifeeltower.png";

import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-image">
        <img src={Tower} alt=""></img>
      </div>
      <div className="contact-page">
        <form>
          <p>
            <label>Your Name</label>
          </p>
          <input type="text" />
          <p>
            <label>Email</label>
          </p>

          <input type="email" />
          <p>
            <label>Subject</label>
          </p>
          <input type="text" />
          <p>
            <label>Message</label>
          </p>
          <textarea rows="6" placeholder="Type Your message here" />
          <p>
            <button className="btn">Submit</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
