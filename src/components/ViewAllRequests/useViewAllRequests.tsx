import { useEffect, useState } from "react";
import {
  IRequest,
  IRequestDetails,
  SortType,
  VisaStatus,
  VisaType,
} from "../../types/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateAllRequestsOrdering } from "../../store/slices/allRequestDetailsSlice";

const tableHeaders = [
  { label: "Application Number", sortType: SortType.ByRequestNumber },
  { label: "Full Name", sortType: SortType.ByRequestFullName },
  { label: "Passport Number", sortType: SortType.ByRequestPassportNumber },
  { label: "Visa Type", sortType: SortType.ByRequestVisaType },
  { label: "Status", sortType: SortType.ByRequestStatus },
];
const useViewAllRequests = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [isSortAssending, setIsSortAssending] = useState(true);
  const [sortedBy, setSortedBy] = useState<SortType>(
    SortType.ByRequestFullName
  );
  const allRequestsX = useSelector(
    (state: RootState) => state.allRequestDetails
  );

  const sortRequestsByText = (requests: IRequestDetails[]) => {
    // Create a shallow copy of the array
    const requestsCopy = [...requests];

    // Sort the copied array
    const sortedRequests = requestsCopy.sort((a, b) => {
      const fullNameA = (a[sortedBy] as string).toLowerCase();
      const fullNameB = (b[sortedBy] as string).toLowerCase();

      if (fullNameA < fullNameB) {
        return isSortAssending ? -1 : 1;
      } else if (fullNameA > fullNameB) {
        return isSortAssending ? 1 : -1;
      }
      return 0;
    });

    return sortedRequests;
  };

  const [allFilteredRequests, setAllFilteredRequetss] = useState<
    IRequestDetails[]
  >(sortRequestsByText(allRequestsX));

  const filterAllRequests = (text: string) => {
    const textLowerCase = text.toLowerCase();
    const filteredRequests = allRequestsX.filter((request) => {
      return isTextFoundInRequestInfo(request, textLowerCase);
    });

    setAllFilteredRequetss(filteredRequests);
  };

  const isTextFoundInRequestInfo = (request: IRequest, text: string) => {
    // check if in any cell
    const isInRequestAppNumber = request.applicationNumber.includes(text);
    const isInRequestAppFullName = request.fullName
      .toLowerCase()
      .includes(text);
    const isInRequestAppPassportNumber = request.passportNumber
      .toLowerCase()
      .includes(text);
    const isInRequestAppVisaType = request.visaType
      .toLowerCase()
      .includes(text);
    const isInRequestAppStatus = request.status.toLowerCase().includes(text);

    return (
      isInRequestAppNumber ||
      isInRequestAppFullName ||
      isInRequestAppPassportNumber ||
      isInRequestAppVisaType ||
      isInRequestAppStatus
    );
  };

  useEffect(() => {
    filterAllRequests(searchText);
  }, [searchText]);

  const sortAllRequests = (sortType: SortType) => {
    setSortedBy(sortType);
    const sortedRequests = sortRequestsByText(allFilteredRequests);
    dispatch(updateAllRequestsOrdering(sortedRequests));
    // setAllRequetss(sortedRequests);
    setAllFilteredRequetss(sortedRequests);
    if (sortType === sortedBy) {
      setIsSortAssending(!isSortAssending);
    } else {
      setIsSortAssending(true);
    }
  };

  return {
    tableHeaders,
    allFilteredRequests,
    searchText,
    setSearchText,
    sortAllRequests,
    sortedBy,
    isSortAssending,
  };
};

export default useViewAllRequests;
