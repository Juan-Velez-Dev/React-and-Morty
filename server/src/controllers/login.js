const users = require("../utils/users")

const login = (req, res) => {
  const { email, password } = req.query;
  if (users) {
    const filter = users.filter(user => user.email === email && user.password === password);
    if (filter) {
      return res
        .status(200)
        .json({ access: true })
    } else {
      return res
        .status(200)
        .json({ access: false })
    }
  }
}

module.exports = login;