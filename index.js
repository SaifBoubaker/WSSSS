const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dotenv = require("dotenv");
const TODOS = require("./todo");

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.DBURL, () => {
  console.log("DB Connected");
});

app.post("/todos", async (req, res) => {
  try {
    const todo = await TODOS.create({ task: req.body.task, isEdited: false });
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
});
app.get("/todos", async (req, res) => {
  try {
    const todos = await TODOS.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const updatedTodo = await TODOS.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTodo);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodo = await TODOS.findByIdAndDelete(req.params.id);
    res.json(deletedTodo);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.URL, () => {
  console.log(`Server is running on ${process.env.URL}`);
});
