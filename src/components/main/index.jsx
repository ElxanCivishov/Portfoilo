import Navbar from "./navbar/Navbar";
import img from "./../../images/avatar-1.png";
import About from "./about/About";

const Main = () => {
  return (
    <div className="main-content">
      <Navbar />
      <About />

      <article className="portfolio" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>
                All
              </button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web design</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>
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
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div>

          <ul className="project-list">
            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={img} alt="finance" loading="lazy" />
                </figure>

                <h3 className="project-title">Finance</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={img} alt="orizon" loading="lazy" />
                </figure>

                <h3 className="project-title">Orizon</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="applications"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={img} alt="brawlhalla" loading="lazy" />
                </figure>

                <h3 className="project-title">Brawlhalla</h3>

                <p className="project-category">Applications</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={img} alt="summary" loading="lazy" />
                </figure>

                <h3 className="project-title">Summary</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="applications"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={img} alt="task manager" loading="lazy" />
                </figure>

                <h3 className="project-title">Task Manager</h3>

                <p className="project-category">Applications</p>
              </a>
            </li>

            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={img} alt="arrival" loading="lazy" />
                </figure>

                <h3 className="project-title">Arrival</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Main;
