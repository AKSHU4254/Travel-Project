import "./styles/FooterStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <div className="footer-col">
            {/*<FaPlaneDeparture size={40} style={{ color: "#fff", marginRight: "2rem" }}/>
  <h4>Tevily</h4>*/}
            <h4>Tevily</h4>
            <ul>
              <li>
                <p>
                  Welcome to our Trip and Tour Agency.
                  <br />
                  Lorem simply text amet cing elit.
                </p>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i> +999-999-999
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i> needhelp@company.com
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <Link to="/tours">Tours</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link to="#">Account</Link>
              </li>
              <li>
                <Link to="#">Legal</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Affilitate Program</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow Us</h4>
            <div className="social-link">
              <Link to="#">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
