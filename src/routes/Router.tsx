import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Signin from "../components/Signin/Signin";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Signin />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/*" element={<PrivateRoutes />} />
      {/* <Route path="/landing" element={<Landing />} />
      <Route path={"/view-all-requests"} element={<ViewAllRequests />} />
      <Route path={"/view-request-details"} element={<ViewRequestDetails />} /> */}

      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);
