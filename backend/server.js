import express from "express";
import dotenv from "dotenv";

import todoRoutes from "./routes/todo.route.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port: ${PORT}`);
});
