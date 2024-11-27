import { Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const PrivateRoutes = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.adminAuth.isLoggedIn
  );

  console.log({ isLoggedIn });

  if (!isLoggedIn) {
    return <Navigate to={"/signin"} />;
  } else {
    return <Layout />;
  }
};

export default PrivateRoutes;
