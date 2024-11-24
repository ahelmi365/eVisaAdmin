import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="container app-container">
      <div className="top">
        <NavBar />
      </div>
      <div className="main">
        <button className="btn btn-primary">Hello</button>
      </div>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default App;
