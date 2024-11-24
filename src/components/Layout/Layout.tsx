import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

import "./Layout.css";

const Layout = () => {
  return (
    <div className="container app-container">
      {/* header */}
      <header className="top">
        <NavBar />
      </header>
      {/* main */}
      <main className="main">
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layout;
