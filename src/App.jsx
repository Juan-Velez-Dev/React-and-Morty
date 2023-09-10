//* COMPONENTS
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Error from "./components/error/Error";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Detail from "./components/detail/Detail";
import "./App.css";

//* HOOKS
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  //* STATES
  const [access, setAccess] = useState(false); // acceso a la pagina
  const [characters, setCharacters] = useState([]); // los caracteres que se van añadiendo

  // simulando base de datos
  const EMAIL = "develop@gmail.com";
  const PASSWORD = "Dev12345";
  //* HOOKS
  const navigate = useNavigate();
  const location = useLocation();

  //* FUNCTIONS
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // la funcion login recibe los datos del input y valida si es igual al de la base de datos
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  // la funcion que cambia nuestro acceso a false si le damos al boton de logout
  const logOut = (event) => {
    setAccess(false);
  };

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
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
      {location.pathname !== "/" && (
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
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
