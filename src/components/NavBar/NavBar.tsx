import "./NavBar.css";

// import logo from "../../assets/images/logo.png";
import logo from "../../assets/svgs/eVisaColorLogo.svg";
import { Link } from "react-router-dom";
import useNavBar from "./useNavBar";
const NavBar = () => {
  const handleLogout = useNavBar();
  return (
    <nav className="top-navbar">
      <div className="left">
        <Link to="/landing" className="al-sidebar-list-link">
          <img src={logo} />
        </Link>
      </div>
      <div className="right">
        <ul className="list-items">
          <li className="nav-item">
            <Link to="/landing" className="al-sidebar-list-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create-visa-request">Request eVisa</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/view-all-requests">My Requests</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/view-my-request">My Request</Link>
          </li>
          <li>
            <Link to="/signin">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
