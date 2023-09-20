import axios from "axios";
import "./detail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  // const params = useParams();
  // console.log("id", typeof params.id);
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  console.log(character);

  return (
    <div className="detail">
      <div className="detail-info">
        <h2>
          Name: <span>{character?.name}</span>
        </h2>
        <h2>
          Id: <span>{character?.id}</span>
        </h2>
        <h2>
          Status: <span>{character?.status}</span>
        </h2>
        <h2>
          Specie: <span>{character?.species}</span>
        </h2>
        <h2>
          Gender: <span>{character?.gender}</span>
        </h2>
        <h2>
          Origin: <span>{character?.origin?.name}</span>
        </h2>
        <h2>
          Location: <span>{character?.location?.name}</span>
        </h2>
      </div>
      <img src={character?.image} alt={character.name} className="detail-img" />
    </div>
  );
}
