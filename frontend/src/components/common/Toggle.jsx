const Toggle = ({ label, checked, updateCheckbox, type }) => {
  if (label) {
    switch (type) {
      case "secondary":
        return (
          <div className="form-control w-52">
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input
                type="checkbox"
                className="toggle toggle-secondary"
                checked={checked}
                onChange={(e) => updateCheckbox(e.target.checked)}
              />
            </label>
          </div>
        );

      case "accent":
        return (
          <div className="form-control w-52">
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input
                type="checkbox"
                className="toggle toggle-accent"
                checked={checked}
                onChange={(e) => updateCheckbox(e.target.checked)}
              />
            </label>
          </div>
        );

      case "success":
        return (
          <div className="form-control w-52">
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked={checked}
                onChange={(e) => updateCheckbox(e.target.checked)}
              />
            </label>
          </div>
        );

      case "warning":
        return (
          <div className="form-control w-52">
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input
                type="checkbox"
                className="toggle toggle-warning"
                checked={checked}
                onChange={(e) => updateCheckbox(e.target.checked)}
              />
            </label>
          </div>
        );

      case "info":
        return (
          <div className="form-control w-52">
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input
                type="checkbox"
                className="toggle toggle-info"
                checked={checked}
                onChange={(e) => updateCheckbox(e.target.checked)}
              />
            </label>
          </div>
        );

      case "error":
        return (
          <div className="form-control w-52">
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input
                type="checkbox"
                className="toggle toggle-error"
                checked={checked}
                onChange={(e) => updateCheckbox(e.target.checked)}
              />
            </label>
          </div>
        );

      default:
        return (
          <div className="form-control w-52">
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={checked}
                onChange={(e) => updateCheckbox(e.target.checked)}
              />
            </label>
          </div>
        );
    }
  } else {
    switch (type) {
      case "secondary":
        return (
          <input
            type="checkbox"
            className="toggle toggle-secondary"
            checked={checked}
            onChange={(e) => updateCheckbox(e.target.checked)}
          />
        );

      case "accent":
        return (
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={checked}
            onChange={(e) => updateCheckbox(e.target.checked)}
          />
        );

      case "success":
        return (
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={checked}
            onChange={(e) => updateCheckbox(e.target.checked)}
          />
        );

      case "warning":
        return (
          <input
            type="checkbox"
            className="toggle toggle-warning"
            checked={checked}
            onChange={(e) => updateCheckbox(e.target.checked)}
          />
        );

      case "info":
        return (
          <input
            type="checkbox"
            className="toggle toggle-info"
            checked={checked}
            onChange={(e) => updateCheckbox(e.target.checked)}
          />
        );

      case "error":
        return (
          <input
            type="checkbox"
            className="toggle toggle-error"
            checked={checked}
            onChange={(e) => updateCheckbox(e.target.checked)}
          />
        );

      default:
        return (
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={checked}
            onChange={(e) => updateCheckbox(e.target.checked)}
          />
        );
    }
  }
};

export default Toggle;
