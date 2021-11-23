const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.urlencoded({ extended: true }));
//setting static directory
app.use(express.static("public"));

//setting global variables
let noun;
let verb;
let adverb;

//endpoint for the first words url
app.get("/first-word", (req, res) => {
  res.sendFile(__dirname + "/public/first-word.html");
});

//post method for form submission from first-word.html -> sets the noun and sends the correct HTML
app.post("/second-word", (req, res) => {
  noun = req.body.noun;
  res.sendFile(__dirname + "/public/second-word.html");
});

//post method for form submission from second-word.html -> sets the verb and sends correct HTML
app.post("/third-word", (req, res) => {
  verb = req.body.verb;
  res.sendFile(__dirname + "/public/third-word.html");
});

//post method for form submission from third-word.html -> sets the adverb and sends correct HTML response
app.post("/story", (req, res) => {
  adverb = req.body.adverb;
  res.send(`<h2>Output</h2>
    <div>Noun: ${noun}</div>
    <div>Verb: ${verb}</div>
    <div>Adverb: ${adverb}</div>`);
});

app.listen(port, () => console.log(`Example app listening port ${port}!`));
