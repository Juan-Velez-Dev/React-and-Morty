import React from "react";
import { connect } from "react-redux";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import "./card.css";

export function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  onClose,
  removeFav,
  addFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = React.useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      const character = {
        id,
        status,
        species,
        image,
        onClose,
      };
      setIsFav(true);
      addFav(character);
    }
  };

  return (
    <div className="card">
      <div className="card-front">
        <img src={image} alt={name} className="card-img" />
        <h2>{name}</h2>
      </div>

      <div className="card-back">
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
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

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
