// Importamos el módulo 'http' para crear un servidor HTTP.
const http = require("http");

// Importamos la función 'getCharById' desde el archivo './controllers/getCharById'.
const getCharById = require("./controllers/getCharById");

// Definimos el número de puerto en el que escuchará el servidor.
const PORT = 3001;

// Creamos un servidor HTTP utilizando el módulo 'http'.
http
  .createServer((req, res) => {
    // Configuramos los encabezados de respuesta para permitir el acceso desde cualquier origen.
    res.setHeader('Access-Control-Allow-Origin', '*'); // Le da acceso a todos los orígenes (cualquier dominio).

    // Verificamos si la URL de la solicitud incluye "/rickandmorty/character".
    if (req.url.includes("/rickandmorty/character")) {
      // Extraemos el ID del personaje de la URL.
      let id = req.url.split("/").pop();

      // Llamamos a la función 'getCharById' para obtener y enviar los detalles del personaje.
      getCharById(id, res);
    }
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log(`Server listening on port ${PORT}`);
  });
