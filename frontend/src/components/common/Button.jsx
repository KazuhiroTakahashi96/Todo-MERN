const Button = ({ text, onClick, styleType }) => {
  switch (styleType) {
    case "secondary":
      return (
        <button
          onClick={onClick}
          className="btn btn-secondary  text-white font-medium"
        >
          {text}
        </button>
      );

    case "accent":
      return (
        <button
          onClick={onClick}
          className="btn btn-accent text-white font-medium"
        >
          {text}
        </button>
      );

    case "ghost":
      return (
        <button
          onClick={onClick}
          className="btn btn-ghost text-white font-medium"
        >
          {text}
        </button>
      );

    case "link":
      return (
        <button
          onClick={onClick}
          className="btn btn-link text-white font-medium"
        >
          {text}
        </button>
      );

    case "warning":
      return (
        <button onClick={onClick} className="btn btn-warning font-medium">
          {text}
        </button>
      );

    case "error":
      return (
        <button
          onClick={onClick}
          className="btn btn-error text-white font-medium"
        >
          {text}
        </button>
      );

    default:
      return (
        <button
          onClick={onClick}
          className="btn btn-primary text-white font-medium"
        >
          {text}
        </button>
      );
  }
};

export default Button;
