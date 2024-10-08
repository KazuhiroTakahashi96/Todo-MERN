import mongoose from "mongoose";
import Todo from "../models/todo.model.js";

// 参考：https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/
// mongoose doc: https://mongoosejs.com/docs/queries.html

export const getTodos = async (req, res) => {
  // corsエラー対応：https://qiita.com/mtoutside/items/cee708841cad7e02f85c
  res.set({ "Access-Control-Allow-Origin": "*" });

  try {
    // ref:https://mongoosejs.com/docs/api/model.html#Model.find()
    const allTodo = await Todo.find({}).sort({ updatedAt: "desc" });
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

    res.status(201).json({ success: true, data: newTodo });
  } catch (error) {
    console.error("Error in the creating process: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const todo = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Todo Id" });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        isCompleted: todo.isCompleted,
      },
      { new: true }
    );
    console.log(updatedTodo);
    res.status(200).json({ success: true, data: updatedTodo });
  } catch (error) {
    console.error("Error in the updating process: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Todo Id" });
  }

  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Todo is deleted" });
  } catch (error) {
    console.error("Error in the deleting process: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
