import { Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const PrivateRoutes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log({ isLoggedIn });

  if (isLoggedIn === "false" || !isLoggedIn) {
    return <Navigate to={"/signin"} />;
  } else {
    return <Layout />;
  }
};

export default PrivateRoutes;
