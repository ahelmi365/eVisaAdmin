import { Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const PrivateRoutes = () => {
  const isLoggedIn = true;

  console.log({isLoggedIn})

  if (!isLoggedIn) {
    return <Navigate to={"/signin"} />;
  }
  return <Layout />;
};

export default PrivateRoutes;
