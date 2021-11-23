const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("public"));

//endpoint for /startrek serving the correct html from public directory
app.get("/startrek", (req, res) => {
  res.sendFile(__dirname + "/public/trek.html");
});

//endpoint for /starwars serving the correct html from public directory
app.get("/starwars", (req, res) => {
  res.sendFile(__dirname + "/public/wars.html");
});

//any other endpoint will send the 404 .html page
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

//using .listen method on port and console logging the port the app is listening on
app.listen(port, () => console.log(`Example app listening port ${port}!`));
