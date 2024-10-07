const Toast = ({ message, type }) => {
  switch (type) {
    case "success":
      return (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>{message}</span>
          </div>
        </div>
      );

    case "error":
      return (
        <div className="toast toast-top toast-end">
          <div className="alert alert-error">
            <span>{message}</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="toast toast-top toast-end">
          <div className="alert alert-info">
            <span>{message}</span>
          </div>
        </div>
      );
  }
};

export default Toast;
