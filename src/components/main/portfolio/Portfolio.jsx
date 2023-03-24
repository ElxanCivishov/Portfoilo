import { useState } from "react";
import Title from "../title/Title";
import "./portfolio.css";
import project1 from "../../../images/project-1.jpg";
import project2 from "../../../images/project-2.png";
import project3 from "../../../images/project-3.jpg";
import project4 from "../../../images/project-4.png";
import project5 from "../../../images/project-5.png";
import project6 from "../../../images/project-6.png";
import project7 from "../../../images/project-7.png";
import project8 from "../../../images/project-8.jpg";
import project9 from "../../../images/project-9.png";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const [active, setActive] = useState(0);
  const filterLink = ["All", "Web Design", "Applications", "Web Development"];

  const projects = [
    {
      id: 1,
      img: project1,
      title: "Finance",
      content: "Web Development",
    },
    {
      id: 2,
      img: project2,
      title: "Orizon",
      content: "Web Development",
    },
    {
      id: 3,
      img: project3,
      title: "Fundo",
      content: "Web Desing",
    },
    {
      id: 4,
      img: project4,
      title: "Brawlhalla",
      content: "Applications",
    },
    {
      id: 5,
      img: project5,
      title: "DSM",
      content: "Web Design",
    },
    {
      id: 6,
      img: project6,
      title: "OriMetaSparkzon",
      content: "Web Design",
    },
    {
      id: 7,
      img: project7,
      title: "Summary",
      content: "Web Development",
    },
    {
      id: 8,
      img: project8,
      title: "Task Manager",
      content: "Applications",
    },
    {
      id: 9,
      img: project9,
      title: "Arrival",
      content: "Web Development",
    },
  ];

  let filteredProjects;
  const handleLink = (index) => {
    setActive(index);
    filteredProjects = "";
    filteredProjects = projects.filter(
      (project) => project.content === filterLink[active]
    );
    console.log(filteredProjects);
  };

  return (
    <article className="portfolio">
      <Title>Portfolio</Title>

      <section className="projects">
        <ul className="filter-list">
          {filterLink.map((filterItem, index) => (
            <li key={index} className="filter-item">
              <button
                className={
                  index === active ? "filter-btn active" : "filter-btn"
                }
                onClick={() => handleLink(index)}
              >
                {filterItem}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <PortfolioItem projects={projects} />
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
