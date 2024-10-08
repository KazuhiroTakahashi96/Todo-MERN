const Badge = ({ label, boolean }) => {
  return (
    <>
      {boolean ? (
        <div className="badge badge-accent text-base">{label}</div>
      ) : (
        <div className="badge badge-neutral text-base">{label}</div>
      )}
    </>
  );
};

export default Badge;
