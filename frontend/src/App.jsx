import { useState } from "react";
import Button from "./components/common/Button";
import Input from "./components/common/Input";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "勉強",
      isCompleted: false,
    },
    {
      id: 2,
      text: "睡眠",
      isCompleted: false,
    },
    {
      id: 3,
      text: "食事",
      isCompleted: false,
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex items-center justify-center gap-4">
        <Input />
        <Button />
      </div>
      <div className="mt-20">
        {todos.map((todo) => (
          <p key={todo.id} className="mb-5">
            {todo.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
