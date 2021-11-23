//setting up the server and setting the port to 5000
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//using urlencoded to clean up urls and static referenced to client/build
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/build"));

//routing /check and sending the file for answers.json that is needed in app.js
app.get("/check", (req, res) => {
  res.sendFile(__dirname + "/api/answers.json");
});

//routing / to send back the index.html from inside the build directory
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

//routing * to handle any non-set routes to a 404 page
app.get("*", (req, res) => {
  res.send(`<h3>404: Whoops, something went wrong...</h3>`);
});

//listening on port 5000 and console logging a message to ensure it is listening
app.listen(port, () => console.log(`Example app listening port ${port}!`));

//PREVIOUS LAB CODE
// let testObject = [
//   {
//     id: 1,
//     jsonServerGeneratedObj: true,
//     text: "hello this is server side generated",
//   },
// ];

// let jsonTestObject = JSON.stringify(testObject);

// app.get("/", (req, res) => {
//   res.send(
//     `<h1>Testing out JSON</h1>
//     <a href="/example">Example</a>
//     <br>
//     <a href="/answers">Answers</a>
//     <br>
//     <a href="/test">Test Object in server.js</a>
//     `
//   );
// });

// app.get("/example", (req, res) => {
//   res.sendFile(__dirname + "/api/example.json");
// });

// app.get("/answers", (req, res) => {
//   res.sendFile(__dirname + "/api/answers.json");
// });

// app.get("/test", (req, res) => {
//   res.json(testObject);
// });
