const Input = ({ input, setInput }) => {
  return (
    <input
      type="text"
      placeholder="TODOを入力"
      className="input input-bordered w-full max-w-xs"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default Input;
