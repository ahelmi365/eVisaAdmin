import { Link } from "react-router-dom";
import useViewAllRequests from "./useViewAllRequests";

const ViewAllRequests = () => {
  const { allFilteredRequests, searchText, setSearchText } =
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
            <th scope="col">Application Number</th>
            <th scope="col">Full Name</th>
            <th scope="col">Passport Number</th>
            <th scope="col">Visa Type</th>
            <th scope="col">Status</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>{renderedRequestsRows}</tbody>
      </table>
    </div>
  );
};

export default ViewAllRequests;
