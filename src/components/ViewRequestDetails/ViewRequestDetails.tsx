import "./ViewRequestDetails.css";

import profilePhoto from "../../assets/images/profilePhoto.jpg";
import passportPhoto from "../../assets/images/passportPhoto.jpg";
import visaInvitationLetterPDF from "../../assets/pdf/invitationLetter.pdf";
import ImagePreview from "../ImagePreview/ImagePreview";
import ViewPDFFile from "../viewPDFFile/ViewPDFFile";
const ViewRequestDetails = () => {
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
  return (
    <div className="view-request-details-container">
      <h4 className="text-center">View Request Details</h4>

      <div className="row my-3">
        <form className="form-horizontal" name="vm.PaymentForm">
          <fieldset className="styled-fieldset" disabled>
            <legend className="styled-legend">Application Details</legend>

            {/* Application Number */}
            {/* Visa Type */}

            <div className="row mb-3">
              <div className="col-sm-12 col-md-6">
                <label className="control-label" htmlFor="passportNumberInpt">
                  Application Number
                </label>
                <input
                  readOnly
                  id="passportNumberInpt"
                  type="text"
                  name="passportNumber"
                  className="form-control"
                  value={applicantInfo.passportNumber}
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label className="control-label" htmlFor="visaTypeInpt">
                  Visa Type
                </label>
                <input
                  readOnly
                  id="visaTypeInpt"
                  type="text"
                  name="visaType"
                  className="form-control"
                  value={applicantInfo.visaType}
                />
              </div>
            </div>

            {/* Entries Number */}
            {/* Duration Of Stay */}
            <div className="row mb-3">
              <div className="col-sm-12 col-md-6">
                <label className="control-label" htmlFor="numberOfEntriesInpt">
                  Entries Number
                </label>
                <input
                  readOnly
                  id="numberOfEntriesInpt"
                  type="text"
                  name="numberOfEntriesInpt"
                  className="form-control"
                  value={applicantInfo.entriesNumber}
                />
              </div>

              <div className="col-sm-12 col-md-6">
                <label className="control-label" htmlFor="durationInpt">
                  Duration Of Stay
                </label>
                <input
                  readOnly
                  id="durationInpt"
                  type="text"
                  name="durationInpt"
                  className="form-control"
                  value={applicantInfo.durationOfStay}
                />
              </div>
            </div>

            {/* Do you have a previous visa? */}
            {/* Previous Visa Number */}

            <div className="row mb-3">
              <div className="col-sm-12 col-md-6">
                <label className="control-label" htmlFor="PreviousVisaInpt">
                  Do you have a previous visa?
                </label>

                <input
                  readOnly
                  id="PreviousVisaInpt"
                  type="text"
                  name="PreviousVisa"
                  className="form-control"
                  value={applicantInfo.haveapreviousvisa}
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label
                  className="control-label"
                  htmlFor="PreviousVisaNumberInpt"
                >
                  Pervious Visa Number
                </label>
                <input
                  readOnly
                  id="PreviousVisaNumberInpt"
                  type="text"
                  name="PreviousVisaNumberInpt"
                  className="form-control"
                  value={applicantInfo.perviousVisaNumber}
                />
              </div>
            </div>
            {/* Purpose Of Visit */}
            <div className="col-12">
              <label className="control-label" htmlFor="purposeOfVisitInpt">
                Purpose Of Visit
              </label>
              <input
                readOnly
                id="purposeOfVisitInpt"
                type="text"
                name="purposeOfVisit"
                className="form-control"
                value={applicantInfo.purposeOfVisit}
              />
            </div>
          </fieldset>

          <fieldset className="styled-fieldset" disabled>
            <legend className="styled-legend">Personal Information</legend>
            {/* Full Name (Passport Name) */}
            {/* Gender */}
            <div className="row mb-3 d-flex flex-row-reverse">
              {/* right - id photo */}
              <div className="col-sm-12 col-md-6 mb-sm-4 mb-md-0">
                <div className="document-id-container">
                  <ImagePreview
                    imageUrl={profilePhoto}
                    altText="document-ID"
                    title="Personal Photo"
                  />
                </div>
              </div>
              {/* LEFT */}
              <div className="col-sm-12 col-md-6 ">
                <label className="control-label" htmlFor="fullNameInpt">
                  Full Name (Passport Name)
                </label>
                <input
                  readOnly
                  id="fullNameInpt"
                  type="text"
                  name="fullName"
                  className="form-control"
                  value={applicantInfo.fullName}
                />

                <label className="control-label" htmlFor="genderInpt">
                  Gender
                </label>
                <input
                  readOnly
                  id="genderInpt"
                  type="text"
                  name="gender"
                  className="form-control"
                  value={applicantInfo.gender}
                />

                {/* Date Of Birth */}

                <label className="control-label" htmlFor="birthDateInpt">
                  Date Of Birth<span>*</span>
                </label>

                <input
                  readOnly
                  id="birthDateInpt"
                  type="text"
                  name="date"
                  className="form-control"
                  value={applicantInfo.dateOfBirth}
                />
              </div>
            </div>
            {/* Mobile Number */}
            {/* Email */}
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label className="control-label" htmlFor="mobNumberInpt">
                  Mobile Number
                </label>
                <input
                  readOnly
                  id="mobNumberInpt"
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  value={applicantInfo.mobileNumber}
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label className="control-label" htmlFor="emailInpt">
                  Email
                </label>
                <input
                  readOnly
                  id="emailInpt"
                  type="text"
                  name="email"
                  className="form-control"
                  value={applicantInfo.email}
                />
              </div>
            </div>

            {/* Current Address (Where are you currently staying) */}
            <div className="col-12 mt-4">
              <label className="control-label" htmlFor="addressInpt">
                Current Address (Where are you currently staying)
              </label>
              <input
                id="addressInpt"
                name="address"
                readOnly
                className="form-control"
                maxLength={500}
                value={applicantInfo.currentAddress}
              />
            </div>
          </fieldset>

          {/* Passport and Travel Information */}
          <fieldset className="styled-fieldset">
            <legend className="styled-legend">
              Passport and Travel Information
            </legend>
            {/* Passport Number */}
            {/* Passport Copy (image) */}

            <div className="row flex-row-reverse">
              {/* right - id photo */}
              <div className="col-sm-12 col-md-6 mb-sm-4 mb-md-0">
                <div className="passport-photo-container">
                  <ImagePreview
                    imageUrl={passportPhoto}
                    altText="Passport photo"
                    calassNames="rounded"
                    title="Passport Copy"
                  />
                </div>
              </div>
              {/* Passport Number and  Arrival Date/Departure Date*/}
              <div className="col-sm-12 col-md-6">
                <label className="control-label" htmlFor="passportNumberInpt">
                  Passport Number
                </label>
                <input
                  readOnly
                  disabled
                  id="passportNumberInpt"
                  type="text"
                  name="passportNumber"
                  className="form-control"
                  value={applicantInfo.passportNumber}
                />
                <label className="control-label" htmlFor="arrivalDateInpt">
                  Arrival Date
                </label>
                <input
                  readOnly
                  disabled
                  id="arrivalDateInpt"
                  type="text"
                  name="date"
                  className="form-control"
                  value={applicantInfo.arrivalDate}
                />
                <label className="control-label" htmlFor="departureDateInpt">
                  Departure Date
                </label>

                <input
                  readOnly
                  disabled
                  id="departureDateInpt"
                  type="text"
                  name="date"
                  className="form-control"
                  value={applicantInfo.departureDate}
                />
              </div>
            </div>

            {/* Invitation Letter (image) */}
            <div className="col-12">
              <label htmlFor="visaInvitationLetterPDF">Invitation Letter</label>

              <ViewPDFFile
                pdfURL={visaInvitationLetterPDF}
                modalTitleText="View Invitation Letter"
                openModalButtonText="View Invitation Letter"
                id="visaInvitationLetterPDF"
              />
            </div>
          </fieldset>

          {/* Emergency Contact Name */}
          {/* Emergency Contact Number */}
          <fieldset className="styled-fieldset" disabled>
            <legend className="styled-legend"> Emergency Contact</legend>
            <div className="row mb-3">
              <div className="col-sm-12 col-md-6">
                <label className="control-label">Emergency Contact Name</label>
                <input
                  readOnly
                  id="emergencyContactNameInpt"
                  type="text"
                  name="emergencyContactName"
                  className="form-control"
                  value={applicantInfo.emergencyContactName}
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label className="control-label">
                  Emergency Contact Number
                </label>
                <input
                  readOnly
                  id="emergencyContactNumberInpt"
                  type="text"
                  name="emergencyContactNumber"
                  className="form-control"
                  value={applicantInfo.emergencyContactNumber}
                />
              </div>
            </div>
          </fieldset>

          {/* Accept or Reject */}
          <div className="row gap-4 mt-4">
            <div className="col-sm-12 col-md-3">
              <button className="btn btn-primary w-100" type="button">
                Accept
              </button>
            </div>
            <div className="col-sm-12 col-md-3">
              <button className="btn btn-danger w-100" type="button">
                Reject
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewRequestDetails;
