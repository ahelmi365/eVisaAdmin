import "./NavBar.css"

import logo from "../../assets/images/logo.png";
const NavBar = () => {
  return (
    <div className="top-navbar">
      <div className="left">
        <img
          src={logo}
          //   style="height: 40px;"
        />
      </div>
      <div className="right">
        <ul className="list-items">
          <li>
            <a ng-href="/#/home" className="al-sidebar-list-link">
              Home
            </a>
          </li>
          <li>
            <a ng-href="/#/VisaRequest">My Requests</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
