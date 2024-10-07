import { useState } from "react";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import Table from "./components/todo/Table";
import Toast from "./components/common/Toast";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "勉強",
      isCompleted: true,
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

  const handleAddTodo = () => {
    if (!input) return;
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: input,
        isCompleted: false,
      },
    ]);

    setInput("");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center py-10 px-20">
      {/* <Toast message={"Hello World!!"} /> */}
      <div className="flex items-center justify-center gap-4">
        <Input input={input} setInput={setInput} />
        <Button text={"追加"} onClick={handleAddTodo} />
      </div>
      <div className="h-full w-full mt-14 px-10 overflow-auto">
        <Table todos={todos} />
      </div>
    </div>
  );
}

export default App;
