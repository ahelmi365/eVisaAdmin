import "./NavBar.css";

import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="top-navbar">
      <div className="left">
        <Link to="/landing" className="al-sidebar-list-link">
          <img src={logo} />
        </Link>
      </div>
      <div className="right">
        <ul className="list-items">
          <li>
            <Link to="/landing" className="al-sidebar-list-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/view-all-requests">My Requests</Link>
          </li>
          <li>
            <Link to="/signin">
              <button className="btn btn-danger">Logout</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
