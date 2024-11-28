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
      <main className="main mb-4">
        <section className="card p-3  p-md-4">
          <Outlet />
        </section>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layout;
