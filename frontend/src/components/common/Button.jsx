const Button = ({ label, onClick, styleType }) => {
  switch (styleType) {
    case "secondary":
      return (
        <button
          onClick={onClick}
          className="btn btn-secondary  text-white font-medium"
        >
          {label}
        </button>
      );

    case "accent":
      return (
        <button
          onClick={onClick}
          className="btn btn-accent text-white font-medium"
        >
          {label}
        </button>
      );

    case "ghost":
      return (
        <button
          onClick={onClick}
          className="btn btn-ghost text-white font-medium"
        >
          {label}
        </button>
      );

    case "link":
      return (
        <button
          onClick={onClick}
          className="btn btn-link text-white font-medium"
        >
          {label}
        </button>
      );

    case "warning":
      return (
        <button onClick={onClick} className="btn btn-warning font-medium">
          {label}
        </button>
      );

    case "error":
      return (
        <button
          onClick={onClick}
          className="btn btn-error text-white font-medium"
        >
          {label}
        </button>
      );

    default:
      return (
        <button
          onClick={onClick}
          className="btn btn-primary text-white font-medium"
        >
          {label}
        </button>
      );
  }
};

export default Button;
