import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";
import ViewAllRequests from "../components/ViewAllRequests/ViewAllRequests";
import ViewRequestDetails from "../components/ViewRequestDetails/ViewRequestDetails";

const PrivateRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path={"/view-all-requests"} element={<ViewAllRequests />} />
        <Route
          path={"/view-request-details"}
          element={<ViewRequestDetails />}
        />
      </Routes>
    </Layout>
  );
};

export default PrivateRoutes;
