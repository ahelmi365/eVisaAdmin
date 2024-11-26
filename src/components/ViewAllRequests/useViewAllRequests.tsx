import { useEffect, useState } from "react";
import {
  IRequest,
  SortType,
  VisaStatus,
  VisaType,
} from "../../types/interfaces";

const tableHeaders = [
  { label: "Application Number", sortType: SortType.ByRequestNumber },
  { label: "Full Name", sortType: SortType.ByRequestFullName },
  { label: "Passport Number", sortType: SortType.ByRequestPassportNumber },
  { label: "Visa Type", sortType: SortType.ByRequestVisaType },
  { label: "Status", sortType: SortType.ByRequestStatus },
];
const useViewAllRequests = () => {
  const [searchText, setSearchText] = useState("");
  const [isSortAssending, setIsSortAssending] = useState(true);
  const [sortedBy, setSortedBy] = useState<SortType>(
    SortType.ByRequestFullName
  );
  const [allRequests, setAllRequetss] = useState<IRequest[]>([
    {
      id: 1,
      applicationNumber: "1",
      fullName: "Mark Beter",
      passportNumber: "0244444444",
      visaType: VisaType.Single,
      status: VisaStatus.Pending,
    },
    {
      id: 2,
      applicationNumber: "10",
      fullName: "Alessa Harry",
      passportNumber: "0255555555",
      visaType: VisaType.Double,
      status: VisaStatus.Accepted,
    },
    {
      id: 3,
      applicationNumber: "20",
      fullName: "Tofy Sander",
      passportNumber: "0266666666",
      visaType: VisaType.Single,
      status: VisaStatus.Rejected,
    },
    {
      id: 4,
      applicationNumber: "1500",
      fullName: "Sarah Martin",
      passportNumber: "P123456AA",
      visaType: VisaType.Single,
      status: VisaStatus.Pending,
    },
  ]);

  const sortRequestsByText = (requests: IRequest[]) => {
    const sortedRequests = requests.sort((a, b) => {
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
  const [allFilteredRequests, setAllFilteredRequetss] = useState<IRequest[]>(
    sortRequestsByText(allRequests)
  );

  const filterAllRequests = (text: string) => {
    const textLowerCase = text.toLowerCase();
    const filteredRequests = allRequests.filter((request) => {
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
    setAllRequetss(sortedRequests);
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
