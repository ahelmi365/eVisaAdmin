import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateRequestStatus
} from "../../store/slices/allRequestDetailsSlice";
import { RootState } from "../../store/store";
import { VisaStatus } from "../../types/interfaces";

const useViewRequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log({ id });
  const dispatch = useDispatch();
  const allRequests = useSelector(
    (state: RootState) => state.allRequestDetails
  );

  const applicantInfo = allRequests.filter(
    (request) => String(request.id) === id
  )[0];

  const handleAcceptApplication = () => {
    console.log("handleAcceptApplication");
    if (id) {
      const IdNumber = Number(id);
      const status = VisaStatus.Accepted;
      dispatch(updateRequestStatus({ id: IdNumber, status }));
      navigate("/view-all-requests");
    }
  };
  const handleRejectApplication = () => {
    console.log("handleRejectApplication");
    if (id) {
      const IdNumber = Number(id);
      const status = VisaStatus.Rejected;
      dispatch(updateRequestStatus({ id: IdNumber, status }));
      navigate("/view-all-requests");
    }
  };

  return { applicantInfo, handleAcceptApplication, handleRejectApplication };
};

export default useViewRequestDetails;
