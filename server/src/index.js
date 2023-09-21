const http = require("http");
const getCharById = require("./controllers/getCharById")

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // le da acceso a { "*" } todos
    //* routes
    if (req.url.includes("/rickandmorty/character")) {
      let id = req.url.split("/").pop();
      getCharById(id, res)
    }

  })
  .listen(PORT, "127.0.0.1", () => {
    console.log(`Server listening in port ${PORT}`)
  })