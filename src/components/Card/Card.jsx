import React from "react";
import { NavLink } from "react-router-dom";
import "./card.css";

export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  onClose,
}) {
  return (
    <div className="card">
      <div className="card-front">
        <img src={image} alt={name} className="card-img" />
        <h2>{name}</h2>
      </div>

      <div className="card-back">
        <button onClick={() => onClose(id)} className="card-btn-delete">
          ✘
        </button>
        <NavLink to={`/detail/${id}`} className="card-link">
          <p className="card-link-text">More info</p>
        </NavLink>
        <h3 className="card-title">{name}</h3>
        <p className="card-status">{status}</p>
        <p>{species}</p>
      </div>
    </div>
  );
}
