const Badge = ({ text, boolean }) => {
  return (
    <>
      {boolean ? (
        <div className="badge badge-accent">{text}</div>
      ) : (
        <div className="badge badge-neutral">{text}</div>
      )}
    </>
  );
};

export default Badge;
