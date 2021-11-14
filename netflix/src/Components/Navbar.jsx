import image from "../Data/Netflix_Logo_RGB.png";
import avatar from "../Data/avatar.png";
import lens from "../Data/lens.svg";
import bell from "../Data/bell-solid.svg";
import { Form, FormControl } from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="container-fluid">
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
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form>
          <i className="fas fa-search"></i>
          <a className="nav-link" href="#">
            KIDS
          </a>
          <FaBell />{" "}
          <img src={avatar} className="nav-avatar" alt="nav-avatar" />
          <MdArrowDropDown className="nav-dropdown" />{" "}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
