const ViewAllRequests = () => {
  const requests = [
    {
      first: "Ali",
      last: "Helmy",
      handle: "@ali",
    },
    {
      first: "Taha",
      last: "Helmy",
      handle: "@taha",
    },
    {
      first: "Mohamed",
      last: "Helmy",
      handle: "@mo",
    },
  ];
  const renderedRequestsRows = requests.map((request, index) => (
    <tr key={request.handle}>
      <th scope="row">{index+1}</th>
      <td>{request.first}</td>
      <td>{request.last}</td>
      <td>{request.handle}</td>
      <td><button className="btn btn-primary">View</button></td>
    </tr>
  ));

  return (
    <div>
      <h4 className="mb-4">All Requests</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>{renderedRequestsRows}</tbody>
      </table>
    </div>
  );
};

export default ViewAllRequests;
