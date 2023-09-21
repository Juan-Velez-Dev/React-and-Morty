const axios = require("axios");

module.exports = getCharById = (id, res) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {

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
        res
          .writeHead(200, { "content-type": "application/json" })
          .end(JSON.stringify(character))
      } else {
        return;
      }
    })
    .catch(err => {
      console.log(err)
      res
        .writeHead(500, { "content-type": "text/plain" })
        .end(JSON.stringify({ message: "Not found" }))
    }
    )
}
