const axios = require("axios")
const URL = `https://rickandmortyapi.com/api/character`;


const getCharById = (req, res) => {
  const { id } = req.params;
  console.log(id)
  axios.get(`${URL}/${id}`) // promise
    .then(({ data }) => {
      if (data) {
        const { id, status, name, species, origin, image, gender } = data;
        const character = { id, status, name, species, origin, image, gender, location }
        return res.json(character);
      } else {
        return res.status(404).json({ message: "Personaje no encontrado" });
      }
    })
    .catch(error => {
      console.error('Error al realizar la solicitud:', error);
      return res.status(500).json({ message: "Error interno del servidor" });
    });
}



module.exports = getCharById;