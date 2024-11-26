import "./ViewRequestDetails.css";

import profilePhoto from "../../assets/images/profilePhoto.jpg";
import passportPhoto from "../../assets/images/passportPhoto.jpg";
import visaInvitationLetterPDF from "../../assets/pdf/invitationLetter.pdf";
import ImagePreview from "../ImagePreview/ImagePreview";
import ViewPDFFile from "../viewPDFFile/ViewPDFFile";
const ViewRequestDetails = () => {
  return (
    <div className="view-request-details-container">
      <h4>View Request Details</h4>

      <div className="row my-3">
        <form className="form-horizontal" name="vm.PaymentForm">
          <fieldset className="styled-fieldset" disabled>
            <legend className="styled-legend">Application Details</legend>

            {/* Application Number */}
            {/* Visa Type */}

            <div className="row mb-3">
              <div className="col-sm-12 col-md-6">
                <label className="control-label">Application Number</label>
                <input
                  readOnly
                  id="passportNumberInpt"
                  type="text"
                  name="passportNumber"
                  className="form-control"
                  value="#Ref000012"
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label className="control-label">Visa Type</label>
                <input
                  readOnly
                  id="visaTypeInpt"
                  type="text"
                  name="visaType"
                  className="form-control"
                  value="Business"
                />
              </div>
            </div>

            {/* Entries Number */}
            {/* Duration Of Stay */}
            <div className="row mb-3">
              <div className="col-sm-12 col-md-6">
                <label className="control-label">Entries Number</label>
                <input
                  readOnly
                  id="numberOfEntriesInpt"
                  type="text"
                  name="numberOfEntriesInpt"
                  className="form-control"
                  value="Single"
                />
              </div>

              <div className="col-sm-12 col-md-6">
                <label className="control-label">Duration Of Stay</label>
                <input
                  readOnly
                  id="durationInpt"
                  type="text"
                  name="durationInpt"
                  className="form-control"
                  value="14"
                />
              </div>
            </div>

            {/* Do you have a previous visa? */}
            {/* Previous Visa Number */}

            <div className="row mb-3">
              <div className="col-sm-12 col-md-6">
                <label className="control-label">
                  Do you have a previous visa?
                </label>

                <input
                  readOnly
                  id="PreviousVisaInpt"
                  type="text"
                  name="PreviousVisa"
                  className="form-control"
                  value="No"
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label className="control-label">Pervious Visa Number</label>
                <input
                  readOnly
                  id="PreviousVisaNumberInpt"
                  type="text"
                  name="PreviousVisaNumberInpt"
                  className="form-control"
                  value=""
                />
              </div>
            </div>
            {/* Purpose Of Visit */}
            <div className="col-12">
              <label className="control-label">Purpose Of Visit</label>
              <input
                readOnly
                id="purposeOfVisitInpt"
                type="text"
                name="purposeOfVisit"
                className="form-control"
                value="Attend Meeting"
              />
            </div>
          </fieldset>

          <fieldset className="styled-fieldset" disabled>
            <legend className="styled-legend">Personal Information</legend>
            {/* Full Name (Passport Name) */}
            {/* Gender */}
            <div className="row mb-3 g-4 d-flex flex-row-reverse">
              {/* right - id photo */}
              <div className="col-sm-12 col-md-6">
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
                <label className="control-label">
                  Full Name (Passport Name)
                </label>
                <input
                  readOnly
                  id="fullNameInpt"
                  type="text"
                  name="fullName"
                  className="form-control"
                  value="Ali Helmi"
                />

                <label className="control-label">Gender</label>
                <input
                  readOnly
                  id="genderInpt"
                  type="text"
                  name="gender"
                  className="form-control"
                  value="Male"
                />

                {/* Date Of Birth */}

                <label className="control-label">
                  Date Of Birth<span>*</span>
                </label>

                <input
                  readOnly
                  id="birthDateInpt"
                  type="text"
                  name="date"
                  className="form-control"
                  value="1986/05/31"
                />
              </div>
            </div>
            {/* Mobile Number */}
            {/* Email */}
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label className="control-label">Mobile Number</label>
                <input
                  readOnly
                  id="mobNumberInpt"
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  value="20 - 01188566998"
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label className="control-label">Email</label>
                <div>
                  <input
                    readOnly
                    id="emailInpt"
                    type="text"
                    name="email"
                    className="form-control"
                    value="mm@yahoo.com"
                  />
                </div>
              </div>
            </div>

            {/* Current Address (Where are you currently staying) */}
            <div className="col-12 mt-4">
              <label className="control-label">
                Current Address (Where are you currently staying)
              </label>
              <input
                id="addressInpt"
                name="address"
                readOnly
                className="form-control"
                maxLength={500}
                value={"Cairo"}
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

            <div className="row mb-3 flex-row-reverse">
              {/* right - id photo */}
              <div className="col-sm-12 col-md-6">
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
                <label className="control-label">Passport Number</label>
                <input
                  readOnly
                  disabled
                  id="passportNumberInpt"
                  type="text"
                  name="passportNumber"
                  className="form-control"
                  value="123456"
                />
                <label className="control-label">Arrival Date</label>
                <input
                  readOnly
                  disabled
                  id="arrivalDateInpt"
                  type="text"
                  name="date"
                  className="form-control"
                  value="2025/10/01"
                />
                <label className="control-label">Departure Date</label>

                <input
                  readOnly
                  disabled
                  id="departureDateInpt"
                  type="text"
                  name="date"
                  className="form-control"
                  value="2025/10/01"
                />
              </div>
            </div>

            {/* Invitation Letter (image) */}
            <div className="col-12">
              <label htmlFor="invitationLetter">Invitation Letter</label>
              {/* <ImagePreview
                imageSrc={visaInvitationLetter}
                altText="invitation letter photo"
                calassNames="rounded"
              /> */}

              <ViewPDFFile
                pdfURL={visaInvitationLetterPDF}
                modalTitleText="View Invitation Letter"
                openModalButtonText="View Invitation Letter"
              />
              {/* <iframe
                src={x}
                style={{ width: "100%", height: "500px", border: "none" }}
                title="PDF Viewer"
              /> */}
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
                  value="Kamel Fahd"
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
                  value="02-01288556688"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>

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
    </div>
  );
};

export default ViewRequestDetails;
