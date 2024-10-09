import { useState } from "react";
import { useTodoStore } from "./store/todo";
import { useToastStore } from "./store/toast";

import Button from "./components/common/Button";
import Input from "./components/common/Input";
import Table from "./components/todo/Table";
import Toast from "./components/common/Toast";

function App() {
  const [input, setInput] = useState("");
  const { createTodo } = useTodoStore();
  const { status, showToast, hideToast } = useToastStore();

  const handleAddTodo = async () => {
    if (!input) return;

    const newTodo = {
      task: input,
      isCompleted: false,
    };

    const res = await createTodo(newTodo);

    if (res.success) {
      showToast("TODOの登録に成功しました", "success");
      hideToast();
      setInput("");
    } else {
      console.error("Failed to create new todo");
      showToast("TODOの登録に失敗しました", "error");
      hideToast();
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center py-10 px-20">
      {status.isShow ? (
        <Toast message={status.message} type={status.type} />
      ) : null}
      <div className="flex items-center justify-center gap-4">
        <Input input={input} setInput={setInput} placeholder={"TODOを入力"} />
        <Button label={"追加"} onClick={handleAddTodo} />
      </div>
      <div className="h-full w-full mt-14 px-10 overflow-auto">
        <Table />
      </div>
    </div>
  );
}

export default App;
