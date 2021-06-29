require('dotenv').config();
const app = require("express")();
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index.css", (req, res) => {
  res.sendFile(__dirname + "/index.css");
});

app.get("/index.js", function (req, res) {
  res.sendFile(__dirname + "/index.js");
});

app.listen(port, () => console.log(`listening on port ${port}!`));