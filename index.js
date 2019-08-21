const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Welcome");
});

server.listen(3001, () => {
  console.log("server is listening your requests");
});
