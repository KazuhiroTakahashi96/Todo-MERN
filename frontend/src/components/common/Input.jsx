const Input = ({ input, setInput, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default Input;
