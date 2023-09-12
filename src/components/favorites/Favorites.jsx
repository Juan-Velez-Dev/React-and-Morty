import { connect } from "react-redux";
import Card from "../Card/Card";

export function Favorites({ onClose, myFavorites }) {
  return (
    <div className="cards">
      {myFavorites.map((character, index) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            // onClose={onClose}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
