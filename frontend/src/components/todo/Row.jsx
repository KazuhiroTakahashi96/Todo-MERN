const Row = ({ text, isCompleted }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{isCompleted === true ? "完了" : "未完了"}</td>
      <td>edit</td>
    </tr>
  );
};

export default Row;
