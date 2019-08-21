const express = require("express");

const server = express();
server.use(express.json());

const projectList = [];

server.get("/", (req, res) => {
  res.send("Welcome to projects storage api");
});

server.get("/projects", (req, res) => {
  res.json(projectList);
});

server.post("/projects", (req, res) => {
  const project = ({ id, title, tasks } = req.body);
  projectList.push(project);
  res.json(projectList);
});

server.listen(3001, () => {
  console.log("server is listening your requests");
});
