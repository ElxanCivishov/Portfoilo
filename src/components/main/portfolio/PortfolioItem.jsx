import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const PortfolioItem = ({ filter }) => {
  return (
    <>
      {filter.map((project) => (
        <li key={project.id} className="project-item  active">
          <Link to={project.url}>
            <div className="project-img">
              <div className="project-item-icon-box">
                <FiEye />
              </div>
              <img src={project.img} alt={project.content} />
            </div>
            <h3 className="project-title">{project.content}</h3>
            <p className="project-category">{project.title}</p>
          </Link>
        </li>
      ))}
    </>
  );
};

export default PortfolioItem;
