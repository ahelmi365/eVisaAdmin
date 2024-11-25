import { useEffect, useState } from "react";
import { IRequest, VisaStatus, VisaType } from "../../types/interfaces";

const useViewAllRequests = () => {
  const [allRequests, setAllRequetss] = useState<IRequest[]>([
    {
      id: 1,
      applicationNumber: "123",
      fullName: "Ali Helmi",
      passportNumber: "0244444444",
      visaType: VisaType.Single,
      status: VisaStatus.Pending,
    },
    {
      id: 2,
      applicationNumber: "456",
      fullName: "Taha Helmi",
      passportNumber: "0255555555",
      visaType: VisaType.Double,
      status: VisaStatus.Accepted,
    },
    {
      id: 3,
      applicationNumber: "789",
      fullName: "Moahmed Helmi",
      passportNumber: "0266666666",
      visaType: VisaType.Single,
      status: VisaStatus.Rejected,
    },
  ]);

  const [allFilteredRequests, setAllFilteredRequetss] =
    useState<IRequest[]>(allRequests);

  const [searchText, setSearchText] = useState("");

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

  return { allFilteredRequests, searchText, setSearchText };
};

export default useViewAllRequests;
