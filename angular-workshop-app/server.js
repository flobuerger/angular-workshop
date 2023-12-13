const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to a small backend");
});

const object = '{"name":"John", "age":30, "surname":"Hill"}';

app.get("/get-object", function (req, res) {
  res.send(object);
});

app.listen(3000, function () {
  console.log("Server is running on localhost:3000");
});
