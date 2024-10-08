import mongoose from "mongoose";
import Todo from "../models/todo.model.js";

export const getTodos = async (req, res) => {
  try {
    const allTodo = await Todo.find({}); // ref:https://mongoosejs.com/docs/api/model.html#Model.find()
    console.log(allTodo);
    res.status(200).json({ success: true, data: allTodo });
  } catch (error) {
    console.error("Error in the fetching process: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const createTodo = async (req, res) => {
  const todo = req.body;

  if (!todo.task) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill the task field" });
  }

  try {
    const newTodo = await Todo.create(todo);

    console.log(newTodo);
    res.status(201).json({ success: true, data: newTodo });
  } catch (error) {
    console.error("Error in the creating process: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateTodo = async (req, res) => {};

export const deleteTodo = async (req, res) => {};
