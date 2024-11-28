import Footer from "../Footer/Footer";
import "./Signin.css";

// import applogo from "../../assets/images/logo.png";
import applogo from "../../assets/svgs/eVisaColorLogo.svg";
import useSignin from "./useSignin";
const Signin = () => {
  const { signinData, handleFormChange, handleSignin, isValidToSignin } =
    useSignin();
  return (
    <div className="signin-container">
      <div className="signin-top"></div>
      <div className="signin-form">
        <div className="app-logo-container">
          <img src={applogo} alt="" className="app-logo" />
        </div>
        {/* <h3>Signin</h3> */}
        <form
          action=""
          className="form-fields mb-4"
          onSubmit={(event) => handleSignin(event)}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Enter your username here"
              required
              autoComplete="username"
              value={signinData.username}
              onChange={(event) => handleFormChange(event)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passw0rd" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="passw0rd"
              autoComplete="current-password"
              placeholder="Enter your password here"
              required
              value={signinData.password}
              onChange={handleFormChange}
            />
          </div>

          <div className="my-4 w-50">
            <button
              className="btn btn-primary w-100"
              disabled={!isValidToSignin}
            >
              Signin
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Signin;
