import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles/LoginStyle.css";

const Login = () => {
  const auth = localStorage.getItem("user");
  const [homepage, setHomepage] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setloginbackground();

    if (auth) {
      navigate("/");
    }
  });

  const setloginbackground = async () => {
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

  const registerHandle = async () => {
    let result = await fetch("http://localhost:4000/userregister", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result)); // to keep the data in local storage
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/");
  };

  const loginHandle = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:4000/userlogin", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter a correct details");
    }
  };

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };

  const handleloginnew = (e) => {
    e.preventDefault();
    if (isLogin) {
      // If on Login page
      if (email.trim() !== "" && password.trim() !== "") {
        handleLoginClick();
        loginHandle();
      } else {
        alert("Please enter both email and password.");
      }
    } else {
      // If on Register page
      handleLoginClick(); // Switch to Login page
    }
  };

  const handleRegisternew = (e) => {
    e.preventDefault();
    if (isLogin) {
      // If on Login page
      handleRegisterClick(); // Switch to Register page
    } else {
      // If on Register page
      if (
        username.trim() !== "" &&
        email.trim() !== "" &&
        password.trim() !== ""
      ) {
        handleRegisterClick();
        registerHandle();
      } else {
        alert("Please fill all the required fields.");
      }
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
      <div className="form-box">
        <h1 id="title">{isLogin ? "Login" : "Register"}</h1>
        <form id="form">
          <div className={`input-group ${isLogin ? "collapsed" : ""}`}>
            {!isLogin && (
              <div className="input-field" id="nameField">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  required={!isLogin}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}

            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {isLogin ? (
              <p>
                Lost password <a href="#">Click Here!</a>
              </p>
            ) : null}
          </div>
          <div className="btn-field">
            <button
              type="button"
              id="signupBtn"
              onClick={handleRegisternew}
              className={!isLogin ? "disable" : ""}
            >
              Register
            </button>
            <button
              type="button"
              id="signinBtn"
              onClick={handleloginnew}
              className={isLogin ? "disable" : ""}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
