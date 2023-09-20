const http = require("http");
const characters = require("./utils/data");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // le da acceso a { "*" } todos
    //* routes
    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
      const character = characters.find(char => char.id === Number(id));
      console.log(id)

      if (character) {
        return res
          .writeHead(200, { "content-Type": "application/json" }) // tipo de dato de la respuesta
          .end(JSON.stringify(character)) //
      } else {
        return res
          .writeHead(404, { "content-type": "application/json" })
          .end(JSON.stringify({ message: "Character not found!" }))
      }
      // res.writeHead(200, { "Conent-Type": character })
    }
    return res
      .writeHead(404, { "content-type": "application/json" })
      .end(JSON.stringify({ message: "Not found" }))
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log(`Server listening in port ${PORT}`)
  })