import "./title.css";
const Title = ({ children }) => {
  return (
    <header>
      <h2 className="h2 article-title">{children}</h2>
    </header>
  );
};

export default Title;
