import { useState } from "react";
import Button from "../common/Button";
import Badge from "../common/Badge";

const Row = ({ text, isCompleted }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => setIsEdit(true);

  const handleUpdate = () => setIsEdit(false);

  const handleDelete = () => {
    console.log("delete todo");
    setIsEdit(false);
  };

  return (
    <tr className="text-base">
      <td>{text}</td>
      <td>
        <Badge
          text={isCompleted === true ? "完了" : "未完了"}
          boolean={isCompleted}
        />
      </td>
      <td>
        {isEdit ? (
          <div className="flex gap-5">
            <Button text={"更新"} onClick={handleUpdate} />
            <Button text={"削除"} onClick={handleDelete} />
          </div>
        ) : (
          <Button text={"編集"} onClick={handleEdit} />
        )}
      </td>
    </tr>
  );
};

export default Row;
