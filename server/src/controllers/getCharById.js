// Importamos la librería Axios para realizar solicitudes HTTP.
const axios = require("axios");

// Definimos una función llamada getCharById que toma un ID y un objeto 'res' como parámetros.
module.exports = getCharById = (id, res) => {
  // Realizamos una solicitud GET a la API de Rick and Morty usando Axios.
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => { // Cuando la solicitud se completa con éxito, manejamos la respuesta.
      // Creamos un objeto 'character' con algunos datos específicos de la respuesta.
      const character = {
        id: id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
        location: data.location
      }

      // Configuramos la respuesta HTTP con un código 200 y el tipo de contenido JSON.
      return res
        .writeHead(200, { "content-type": "application/json" })
        .end(JSON.stringify(character))

    })
    .catch(error => { // Si hay un error en la solicitud, manejamos la excepción aquí.
      // Configuramos la respuesta HTTP con un código 500 y un mensaje de error en formato JSON.
      res
        .writeHead(500, { "content-type": "text/plain" })
        .end(JSON.stringify(error.message))
    }
    )
}
