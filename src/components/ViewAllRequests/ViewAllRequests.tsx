import { Link } from "react-router-dom";
import ArrowDownUp from "../Icons/ArrowDownUp/ArrowDownUp";
import useViewAllRequests from "./useViewAllRequests";
import "./ViewAllRequests.css";
import ArrowAssending from "../Icons/ArrowAssending/ArrowAssending";
import ArrowDessending from "../Icons/ArrowDessending/ArrowDessending";

const ViewAllRequests = () => {
  const {
    sortedBy,
    tableHeaders,
    allFilteredRequests,
    searchText,
    setSearchText,
    sortAllRequests,
    isSortAssending,
  } = useViewAllRequests();
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

  const renderedTableHeaders = tableHeaders.map((header) => (
    <th
      key={header.sortType}
      scope="col"
      onClick={() => {
        sortAllRequests(header.sortType);
      }}
    >
      {header.label}{" "}
      {sortedBy === header.sortType ? (
        isSortAssending ? (
          <ArrowAssending />
        ) : (
          <ArrowDessending />
        )
      ) : (
        <ArrowDownUp style={{ opacity: "0.2" }} />
      )}
    </th>
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
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              {renderedTableHeaders}
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>{renderedRequestsRows}</tbody>
        </table>
        <div className="d-flex justify-content-between align-items-center">
          <div className="select-container d-flex align-items-center">
            <label htmlFor="tableItems" className="pe-2" style={{fontWeight:"400"}}>Show</label>
            <div className="select-items" >
              <select
              id="tableItems"
                className="form-select form-select-sm"
                aria-label="Small select example"
              >
                <option>Please select</option>
                <option value="1" selected>
                  5
                </option>
                <option value="2">10</option>
                <option value="3">15</option>
              </select>
            </div>
            <span className="ms-2">Items</span>
          </div>
          <nav aria-label="Table navigation">
            <ul className="pagination justify-content-end m-0">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ViewAllRequests;
