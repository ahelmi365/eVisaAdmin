import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Landing from "../components/Landing/Landing";
import Signin from "../components/Signin/Signin";
import ViewAllRequests from "../components/ViewAllRequests/ViewAllRequests";
import ViewRequestDetails from "../components/ViewRequestDetails/ViewRequestDetails";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<Landing />} />
        <Route path={"/landing"} element={<Landing />} />
        <Route path={"/view-all-requests"} element={<ViewAllRequests />} />
        <Route
          path={"/view-request-details"}
          element={<ViewRequestDetails />}
        />
      </Route>

      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);
