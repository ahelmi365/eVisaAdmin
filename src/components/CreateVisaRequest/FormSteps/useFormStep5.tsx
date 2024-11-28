import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const useFormStep5 = () => {
  const allRequests = useSelector(
    (state: RootState) => state.allRequestDetails
  );

  const applicantInfo = allRequests.filter((request) => request.id === 2)[0];

  return applicantInfo;
};

export default useFormStep5
