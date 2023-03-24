import { FiEye } from "react-icons/fi";

const PortfolioItem = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <li key={project.id} className="project-item  active">
          <a href="#">
            <div className="project-img">
              <div className="project-item-icon-box">
                <FiEye />
              </div>
              <img src={project.img} alt={project.content} />
            </div>
            <h3 className="project-title">{project.content}</h3>
            <p className="project-category">{project.title}</p>
          </a>
        </li>
      ))}
    </>
  );
};

export default PortfolioItem;
