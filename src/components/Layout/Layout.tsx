import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

import "./Layout.css";

interface ILayoutPorps {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayoutPorps) => {
  return (
    <div className="container app-container">
      {/* header */}
      <header className="top">
        <NavBar />
      </header>
      {/* main */}
      <main className="main">{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layout;
