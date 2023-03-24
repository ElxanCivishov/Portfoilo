import { Link } from "react-router-dom";

const clientItem = ({ clients }) => {
  return (
    <>
      {clients.map((item, index) => (
        <li key={index} className="clients-item">
          <Link to="#">
            <img src={item} alt="client logo" />
          </Link>
        </li>
      ))}
    </>
  );
};

export default clientItem;
