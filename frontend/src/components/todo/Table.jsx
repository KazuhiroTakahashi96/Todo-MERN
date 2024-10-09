import { useEffect } from "react";
import Header from "./Header";
import Row from "./Row";
import { useTodoStore } from "../../store/todo";

const Table = () => {
  const { todos, getTodos } = useTodoStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getTodos();
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [getTodos]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <Header />
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Row key={todo._id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
