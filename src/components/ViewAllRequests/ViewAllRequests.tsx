import { Link } from "react-router-dom";

const ViewAllRequests = () => {
  const requests = [
    {
      applicationNumber: "#1234",
      fullName: "Ali Helmi",
      passportNumber: "02589641422",
      visaType: "Single",
    },
    {
      applicationNumber: "#1234",
      fullName: "Taha Helmi",
      passportNumber: "02589641422",
      visaType: "Double",
    },
    {
      applicationNumber: "#1234",
      fullName: "Moahmed Helmi",
      passportNumber: "02589641422",
      visaType: "Single",
    },
  ];
  const renderedRequestsRows = requests.map((request, index) => (
    <tr key={request.passportNumber}>
      {/* <th scope="row">{index + 1}</th> */}
      <td>{request.applicationNumber}</td>
      <td>{request.fullName}</td>
      <td>{request.passportNumber}</td>
      <td>{request.visaType}</td>
      <td>
        <Link to={"/view-request-details"}>
          <button className="btn btn-primary">View</button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <div>
      <h4 className="mb-4">All Requests</h4>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Application Number</th>
            <th scope="col">Full Name</th>
            <th scope="col">Passport Number</th>
            <th scope="col">Visa Type</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>{renderedRequestsRows}</tbody>
      </table>
    </div>
  );
};

export default ViewAllRequests;
