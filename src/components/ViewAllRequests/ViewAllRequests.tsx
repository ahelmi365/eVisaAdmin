import { Link } from "react-router-dom";
import useViewAllRequests from "./useViewAllRequests";
import ArrowDownUp from "../Icons/ArrowDownUp/ArrowDownUp";
import { SortType } from "../../types/interfaces";
import "./ViewAllRequests.css";

const ViewAllRequests = () => {
  const { allFilteredRequests, searchText, setSearchText, sortAllRequests } =
    useViewAllRequests();
  const renderedRequestsRows = allFilteredRequests.map((request) => (
    <tr key={request.id}>
      {/* <th scope="row">{index + 1}</th> */}
      <td>{request.applicationNumber}</td>
      <td>{request.fullName}</td>
      <td>{request.passportNumber}</td>
      <td>{request.visaType}</td>
      <td>{request.status}</td>
      <td>
        <Link to={"/view-request-details"}>
          <button className="btn btn-primary">View</button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h4 className="mb-4">All Requests</h4>

        <div className="right">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="py-1 px-2 border border-1 rounded focus-ring"
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th
              scope="col"
              onClick={() => {
                sortAllRequests(SortType.ByRequestNumber);
              }}
            >
              Application Number
              <ArrowDownUp />
            </th>
            <th
              scope="col"
              onClick={() => {
                sortAllRequests(SortType.ByRequestFullName);
              }}
            >
              Full Name <ArrowDownUp />
            </th>
            <th
              scope="col"
              onClick={() => {
                sortAllRequests(SortType.ByRequestPassportNumber);
              }}
            >
              Passport Number <ArrowDownUp />
            </th>
            <th
              scope="col"
              onClick={() => {
                sortAllRequests(SortType.ByRequestVisaType);
              }}
            >
              Visa Type <ArrowDownUp />
            </th>
            <th
              scope="col"
              onClick={() => {
                sortAllRequests(SortType.ByRequestStatus);
              }}
            >
              Status <ArrowDownUp />
            </th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>{renderedRequestsRows}</tbody>
      </table>
    </div>
  );
};

export default ViewAllRequests;
