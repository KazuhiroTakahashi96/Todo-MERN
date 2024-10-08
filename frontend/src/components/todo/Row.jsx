import { useState } from "react";
import Button from "../common/Button";
import Badge from "../common/Badge";
import Toggle from "../common/Toggle";

const Row = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoIsCompleted, setTodoIsCompleted] = useState(todo.isCompleted);

  const handleEdit = () => setIsEdit(true);

  const handleUpdate = () => setIsEdit(false);

  const handleDelete = () => {
    console.log("delete todo");
    setIsEdit(false);
  };

  return (
    <tr className="text-base">
      <td>
        {isEdit ? (
          <Button label={"更新"} onClick={handleUpdate} styleType={"accent"} />
        ) : (
          <Button label={"編集"} onClick={handleEdit} styleType={"warning"} />
        )}
      </td>
      <td>{todo.text}</td>
      <td>
        {isEdit ? (
          <Toggle
            checked={todoIsCompleted}
            updateCheckbox={setTodoIsCompleted}
          />
        ) : (
          <Badge
            label={todoIsCompleted === true ? "完了" : "未完了"}
            boolean={todoIsCompleted}
          />
        )}
      </td>
      <td>
        <Button label={"削除"} onClick={handleDelete} styleType={"error"} />
      </td>
    </tr>
  );
};

export default Row;
