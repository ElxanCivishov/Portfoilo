import { useState, useEffect } from "react";
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

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Portfolio = () => {
  const [active, setActive] = useState(0);
  const [selectList, setSelectList] = useState(false);
  const [filter, setFilter] = useState();
  const category = ["All", "Web Design", "Applications", "Web Development"];
  const projects = [
    {
      id: 1,
      img: project1,
      title: "Finance",
      url: "",
      content: "Web Development",
    },
    {
      id: 2,
      img: project2,
      title: "Orizon",
      url: "",
      content: "Web Development",
    },
    {
      id: 3,
      img: project3,
      title: "Fundo",
      url: "",
      content: "Web Desing",
    },
    {
      id: 4,
      img: project4,
      title: "Brawlhalla",
      url: "",
      content: "Applications",
    },
    {
      id: 5,
      img: project5,
      title: "DSM",
      url: "",
      content: "Web Design",
    },
    {
      id: 6,
      img: project6,
      title: "OriMetaSparkzon",
      url: "",
      content: "Web Design",
    },
    {
      id: 7,
      img: project7,
      title: "Summary",
      url: "",
      content: "Web Development",
    },
    {
      id: 8,
      img: project8,
      title: "Task Manager",
      url: "8",
      content: "Applications",
    },
    {
      id: 9,
      img: project9,
      title: "Arrival",
      url: "9",
      content: "Web Development",
    },
  ];

  const handleLink = (index) => {
    setActive(index);
    setSelectList(!selectList);
  };
  const handleSelect = () => {
    setSelectList(!selectList);
  };

  useEffect(() => {
    setFilter(
      projects.filter((project) => project.content === category[active])
    );
  }, [active]);

  return (
    <article className="portfolio">
      <Title>Portfolio</Title>

      <section className="projects">
        <ul className="filter-list">
          {category.map((filterItem, index) => (
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
          <button
            className={selectList ? "filter-select active" : "filter-select"}
            onClick={() => handleSelect()}
          >
            <div className="select-value">Select category</div>
            <div className="select-icon">
              {selectList ? <BiChevronUp /> : <BiChevronDown />}
            </div>
          </button>
          <ul className={selectList ? "select-list active" : "select-list"}>
            {category.map((filterItem, index) => (
              <li key={index} className="select-item">
                <button onClick={() => handleLink(index)}>{filterItem}</button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {active === 0 && <PortfolioItem filter={projects} />}
          {filter && <PortfolioItem filter={filter} />}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
