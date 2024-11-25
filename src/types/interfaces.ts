export interface IRequest {
  id: number;
  applicationNumber: string;
  fullName: string;
  passportNumber: string;
  visaType: VisaType;
  status: VisaStatus;
}

export enum VisaType {
  Single = "Single",
  Double = "Double",
}

export enum VisaStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
}
