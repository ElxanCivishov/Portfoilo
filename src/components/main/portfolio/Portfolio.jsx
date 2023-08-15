import { useState, useEffect } from "react";
import Title from "../title/Title";
import "./portfolio.css";

import PortfolioItem from "./PortfolioItem";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { projects } from "../../../data/data";

const Portfolio = () => {
  const [active, setActive] = useState(0);
  const [selectList, setSelectList] = useState(false);
  const [filter, setFilter] = useState();
  const category = ["All", "Web Design", "Applications", "Web Development"];

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
