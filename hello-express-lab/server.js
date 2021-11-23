const express = require("express");
const app = express();
//setting up the desired port for the server
const port = process.env.PORT || 5000;

app.get("/goodbye", (req, res) => {
  res.send("<h1>Farewell, <i>World</i>!</h1>");
});

app.get("/:key", (req, res) => {
  console.log(req.params);
  let message = `<h4>Hello, ${req.params.key}</h4>`;
  res.send(message);
});

//http method get to display the homepage
app.get("/", (req, res) => {
  res.send("<h1>Hello, <i>World</i>!</h1>");
});

//using .listen method to console log the port the app is listening on
app.listen(port, () => console.log(`Listening on port ${port}!`));
