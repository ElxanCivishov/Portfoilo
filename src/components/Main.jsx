// import profile from "../images/avatar-1.png";
const Main = () => {
  return (
    <div>
      {" "}
      <nav class="navbar">
        <ul class="navbar-list">
          <li class="navbar-item">
            <button class="navbar-link  active" data-nav-link>
              About
            </button>
          </li>

          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>
              Resume
            </button>
          </li>

          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>
              Portfolio
            </button>
          </li>

          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>
              Blog
            </button>
          </li>

          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
