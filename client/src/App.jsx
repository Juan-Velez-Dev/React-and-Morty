//* COMPONENTS
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Error from "./components/error/Error";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Detail from "./components/detail/Detail";
import Favorites from "./components/favorites/Favorites";
import "./App.css";

//* HOOKS
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  //* LOCAL STATES
  const [access, setAccess] = useState(false);

  const [characters, setCharacters] = useState([]); // los caracteres que se van añadiendo

  // simulando base de datos
  // const EMAIL = "develop@gmail.com";
  // const PASSWORD = "Dev12345";

  //* HOOKS INVOCATION
  const navigate = useNavigate();
  const location = useLocation();

  //* USEEFFECTS
  useEffect(() => {
    !access && navigate("/home"); //! debmos cambiar el path a "/" para que nuestro login funcione
  }, [access]);

  //* FUNCTIONS

  const login = (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  };

  // la funcion que cambia nuestro acceso a false si le damos al boton de logout
  const logOut = () => {
    setAccess(false);
  };

  // la funcion
  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.id) {
          if (!characters.some((character) => character.id === data.id)) {
            setCharacters((prevCharacters) => [...prevCharacters, data]);
          } else {
            window.alert("This character is already on the list");
          }
        }
      })
      .catch(() => alert("There is no character with this id"));
  };

  const onClose = (id) => {
    setCharacters((chars) => chars.filter((char) => char.id !== parseInt(id)));
  };

  const randomChar = () => {
    let randomNum = Math.floor(Math.random() * 826) + 1;

    axios(`https://rickandmortyapi.com/api/character/${randomNum}`).then(
      ({ data }) => {
        if (data.id) {
          if (!characters.some((character) => character.id === data.id)) {
            setCharacters((prevCharacters) => [...prevCharacters, data]);
          }
        }
      }
    );
  };

  return (
    <div className="app-container">
      {location.pathname !== "/" && location.pathname !== "*" && (
        <Nav
          logOut={logOut}
          characters={characters}
          onSearch={onSearch}
          onClose={onClose}
          randomChar={randomChar}
        />
      )}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
