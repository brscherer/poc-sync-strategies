const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let todoList = [];

app.get("/todo", (req, res) => {
  res.status(200).json(todoList);
});

app.post("/todo/clear", (req, res) => {
  todoList = [];
  res.status(200).json(todoList);
});

app.post("/todo/pessimistic", (req, res) => {
  setTimeout(() => {
    todoList.push(req.body.data);
    res.status(200).json(todoList);
  }, 200);
});

app.post("/todo/optimistic", (req, res) => {
  todoList.push(req.body.data);
  res.status(200).json(todoList);
  // res.status(400).send();
});

app.listen(8080);
