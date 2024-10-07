import { useState } from "react";
import Button from "../common/Button";
import Badge from "../common/Badge";
import Toggle from "../common/Toggle";

const Row = ({ text, isCompleted }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoIsCompleted, setTodoIsCompleted] = useState(isCompleted);

  const handleEdit = () => setIsEdit(true);

  const handleUpdate = () => setIsEdit(false);

  const handleDelete = () => {
    console.log("delete todo");
    setIsEdit(false);
  };

  const handleUpdateCheckbox = (checked) => {
    setTodoIsCompleted(checked);
  };

  return (
    <tr className="text-base">
      <td>
        {isEdit ? (
          <Button text={"更新"} onClick={handleUpdate} styleType={"accent"} />
        ) : (
          <Button text={"編集"} onClick={handleEdit} styleType={"warning"} />
        )}
      </td>
      <td>{text}</td>
      <td>
        {isEdit ? (
          // <Toggle
          //   label={"Hello World"}
          //   checked={todoIsCompleted}
          //   updateCheckbox={handleUpdateCheckbox}
          // />
          <Toggle
            checked={todoIsCompleted}
            updateCheckbox={handleUpdateCheckbox}
          />
        ) : (
          <Badge
            text={todoIsCompleted === true ? "完了" : "未完了"}
            boolean={todoIsCompleted}
          />
        )}
      </td>
      <td>
        <Button text={"削除"} onClick={handleDelete} styleType={"error"} />
      </td>
    </tr>
  );
};

export default Row;
