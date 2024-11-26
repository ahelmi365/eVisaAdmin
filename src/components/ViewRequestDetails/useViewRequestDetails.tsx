import { useParams } from "react-router-dom";

const applicantInfo = {
  fullname: "Sarah Martin",
  applicationNumber: "#Ref000012",
  visaType: "Business",
  entriesNumber: "Single",
  durationOfStay: "14",
  haveapreviousvisa: "No",
  perviousVisaNumber: "---",
  purposeOfVisit: "Attend Meeting",
  passportNumber: "P123456AA",
  fullName: "Sarah Martin",
  currentAddress: " Ottawa, Canda",
  gender: "Female",
  dateOfBirth: "08/01/1990",
  arrivalDate: "12/01/2024",
  departureDate: "12/14/2024",
  mobileNumber: "+1002345678",
  email: "sarah_martin@domain.com",
  emergencyContactName: "Martin Scorsese",
  emergencyContactNumber: "+10023443200",
};
const useViewRequestDetails = () => {
  const { id } = useParams();

  console.log({id})

  return applicantInfo;
};

export default useViewRequestDetails;
