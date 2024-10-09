import { useState } from "react";
import { useTodoStore } from "../../store/todo";
import { useToastStore } from "../../store/toast";

import Button from "../common/Button";
import Badge from "../common/Badge";
import Toggle from "../common/Toggle";

const Row = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoIsCompleted, setTodoIsCompleted] = useState(todo.isCompleted);

  const { updateTodo, deleteTodo } = useTodoStore();
  const { status, showToast, hideToast } = useToastStore();

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleUpdate = async () => {
    const res = await updateTodo(todo._id, todoIsCompleted);

    if (res.success) {
      showToast("TODOの更新に成功しました", "success");
      hideToast();
      setIsEdit(false);
    } else {
      console.error("Failed to update todo");
      showToast("TODOの更新に失敗しました", "error");
      hideToast();
    }
  };

  const handleDelete = async () => {
    const res = await deleteTodo(todo._id);

    if (res.success) {
      showToast("TODOの削除に成功しました", "success");
      hideToast();
    } else {
      console.error("Failed to delete todo");
      showToast("TODOの削除に失敗しました", "error");
      hideToast();
    }
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
      <td>{todo.task}</td>
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
