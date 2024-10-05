const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-primary text-white font-medium"
    >
      {text}
    </button>
  );
};

export default Button;
