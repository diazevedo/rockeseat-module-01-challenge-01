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

server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projectList.map(project => {
    if (project.id == id) project.tasks.push(title);
  });

  res.json(projectList);
});

server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projectList.map(project => {
    if (project.id == id) project.title = title;
  });

  res.json(projectList);
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  projectList.filter((project, index) => {
    if (project.id == id) projectList.splice(index, 1);
  });

  res.json(projectList);
});

server.listen(3001, () => {
  console.log("server is listening your requests");
});
