const Badge = ({ text, boolean }) => {
  return (
    <>
      {boolean ? (
        <div className="badge badge-accent text-base">{text}</div>
      ) : (
        <div className="badge badge-neutral text-base">{text}</div>
      )}
    </>
  );
};

export default Badge;
