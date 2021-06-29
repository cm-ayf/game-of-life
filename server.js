require('dotenv').config();
const app = require("express")();
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.get("/main.js", function (req, res) {
  res.sendFile(__dirname + "/main.js");
});

app.listen(port, () => console.log(`listening on port ${port}!`));