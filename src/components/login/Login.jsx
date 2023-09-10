import { useState } from "react";
import React from "react";
import openEye from "../../assets/open-eye.png";
import closeEye from "../../assets/close-eye.png";
import graffity from "../../assets/rick-and-morty-logo.png";
import "./login.css";

import validate from "./validate";

export default function Login({ login }) {
  const [inputType, setInputType] = useState("password");
  const [eye, setEye] = useState(openEye);
  const [userData, setUseData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [messageRequiered, setMessageRequiered] = useState(false);

  const showPassword = (event) => {
    event.preventDefault();
    if (inputType === "password") {
      setInputType("text");
      setEye(closeEye);
    } else {
      setInputType("password");
      setEye(openEye);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUseData({
      ...userData,
      [name]: value,
    });
    setMessageRequiered(false);
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login(userData)) {
      login(userData);
    } else {
      setMessageRequiered(true);
    }
    // login(userData);
  };

  return (
    <div className="container">
      <img src={graffity} alt="" className="img" />
      <h2 className="title">Login</h2>
      <p className="access-message">Only developers have access!</p>
      <form onSubmit={handleSubmit} className="form">
        <label className="label-email">Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
          className="input-email"
        />
        <p className="error-message">{messageRequiered && errors.email}</p>
        <label className="label-password">
          Password
          <button
            type="button"
            onClick={showPassword}
            className="eye-btn-btn"
            alt="button see password"
          >
            <img src={eye} className="eye-btn" />
          </button>
        </label>
        <input
          type={inputType}
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
          className="input-password"
        />
        <p className="error-message">{messageRequiered && errors.password}</p>

        <button onClick={handleChange} className="login-btn">
          Login
        </button>
      </form>
      <footer className="footer">
        <h4 className="footer-title">Create by: Juan Vélez</h4>
        <p className="footer-text">SUP: Fran Furaffa Fafurru Rinkurusu</p>
      </footer>
    </div>
  );
}
