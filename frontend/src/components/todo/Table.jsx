import Header from "./Header";
import Row from "./Row";

const Table = ({ todos }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <Header />
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Row key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
