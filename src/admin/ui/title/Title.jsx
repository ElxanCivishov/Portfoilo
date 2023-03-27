import "./title.css";

const Title = ({ children }) => {
  return (
    <div className="admin-title">
      <h3>{children}</h3>
    </div>
  );
};

export default Title;
