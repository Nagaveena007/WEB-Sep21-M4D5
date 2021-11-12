import image from "../Data/Netflix_Logo_RGB.png";
import avatar from "../Data/avatar.png";
import lens from "../Data/lens.svg";
import bell from "../Data/bell-solid.svg";
const Navbar = () => {
  return (
    <div className="container-fluid navt">
      <nav className="navbar navbar-expand-lg nav-center">
        <a className="navbar-brand" href="#">
          <img src={image} className="nav-logo-img" alt="netflix logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link nav-link-active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TV Shows
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Recently Added
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                My List
              </a>
            </li>
          </ul>

          <i className="fas fa-search"></i>
          <a className="nav-link" href="#">
            KIDS
          </a>
          <i className="fas fa-bell"></i>
          <img src={avatar} className="nav-avatar" alt="nav-avatar" />
          <i className="fas fa-caret-down"></i>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
