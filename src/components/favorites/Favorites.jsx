import { connect } from "react-redux";
import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

export function Favorites({ onClose, myFavorites, allCharacters }) {
  const [aux, setAux] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderCards("A"));
  }, [allCharacters]);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select name="order" onChange={handleOrder}>
        <option value="A">Ascendant</option>
        <option value="B">Descending</option>
      </select>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className="cards">
        {myFavorites?.map((character, index) => {
          return (
            <Card
              key={index}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
  };
};

export default connect(mapStateToProps)(Favorites);
