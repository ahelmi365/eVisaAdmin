export interface IRequest {
  id: number;
  applicationNumber: string;
  fullName: string;
  passportNumber: string;
  visaType: VisaType;
  status: VisaStatus;
}
export interface IRequestDetails extends IRequest {
  entriesNumber: EntriesNumber;
  durationOfStay: string;
  haveapreviousvisa: string;
  perviousVisaNumber: string;
  purposeOfVisit: string;
  currentAddress: string;
  gender: string;
  dateOfBirth: string;
  arrivalDate: string;
  departureDate: string;
  mobileNumber: string;
  email: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
}
export enum EntriesNumber {
  Single = "Single",
  Double = "Double",
}
export enum VisaType {
  Business = "Business",
  Touristic = "Touristic",
}

export enum VisaStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
}

export enum SortType {
  ByRequestNumber = "applicationNumber",
  ByRequestFullName = "fullName",
  ByRequestPassportNumber = "passportNumber",
  ByRequestVisaType = "visaType",
  ByRequestStatus = "status",
}
