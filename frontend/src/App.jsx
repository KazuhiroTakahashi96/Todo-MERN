import { useState } from "react";
import Button from "./components/common/Button";
import Input from "./components/common/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex items-center justify-center gap-4">
        <Input />
        <Button />
      </div>
    </div>
  );
}

export default App;
