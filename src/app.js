const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Express is running");
});

app.get("/userdetail", (req, res) => {
  res.status(200).send({ data: req.query.name });
});

app.listen(3000, () => {
  console.log("Server is running on localhost:3000");
});

// const url = "http://api.weatherstack.com/current?access_key=9eadfa5aa2f66d435da211fa97bc8179&query=ghaziabad";
