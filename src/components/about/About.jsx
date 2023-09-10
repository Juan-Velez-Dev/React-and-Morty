import React from "react";
import { NavLink } from "react-router-dom";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-info">
        <h2>
          Name: <span> Juan Vélez</span>
        </h2>
        <h2>
          Status: <span> I live, I hope</span>
        </h2>
        <h2>
          Specie:
          <span> Developer</span>
        </h2>
        <h2>
          Gender: <span> Code</span>
        </h2>
        <h2>
          Origin: <span>Matrix</span>
        </h2>
        <div className="about-buttons">
          <NavLink
            className="link-linkedin"
            to="https://www.linkedin.com/in/juan-velez-/"
            target="_blank"
          >
            <button className="btn-linkedin">LinkedIn</button>
          </NavLink>
          <NavLink
            className="link-github"
            to="https://github.com/Juan-Velez-Dev"
            target="_blank"
          >
            <button className="btn-github">GitHub</button>
          </NavLink>
        </div>
      </div>
      <img className="about-img" src="src\assets\photo.JPG" alt="" />
    </div>
  );
}
