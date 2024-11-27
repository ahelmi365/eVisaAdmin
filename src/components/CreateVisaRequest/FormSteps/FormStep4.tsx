import { applicantInitialInfo } from "../../../utils/consts";

const FormStep4 = () => {
  return (
    <div className="row my-3">
      <form name="PaymentForm">
        {/* Passport and Travel Information */}
        <fieldset className="styled-fieldset mb-4">
          <legend className="styled-legend">
            Passport and Travel Information
          </legend>
          {/* Passport Number */}
          {/* Passport Copy (image) */}

          <div className="row flex-row-reverse">
            {/* right - id photo */}
            <div className="col-sm-12 col-md-6 mb-sm-4 mb-md-0">
              {/* <div className="passport-photo-container">
                  <ImagePreview
                    imageUrl={passportPhoto}
                    altText="Passport photo"
                    calassNames="rounded"
                    title="Passport Copy"
                  />
                </div> */}
            </div>
            {/* Passport Number and  Arrival Date/Departure Date*/}
            <div className="col-sm-12 col-md-6">
              <label className="control-label" htmlFor="passportNumberInpt">
                Passport Number
              </label>
              <input
                readOnly
                id="passportNumberInpt"
                type="text"
                name="passportNumber"
                className="form-control mb-2"
                value={applicantInitialInfo.passportNumber}
              />
              <label className="control-label" htmlFor="arrivalDateInpt">
                Arrival Date
              </label>
              <input
                readOnly
                id="arrivalDateInpt"
                type="text"
                name="date"
                className="form-control mb-2"
                value={applicantInitialInfo.arrivalDate}
              />
              <label className="control-label" htmlFor="departureDateInpt">
                Departure Date
              </label>

              <input
                readOnly
                id="departureDateInpt"
                type="text"
                name="date"
                className="form-control mb-2"
                value={applicantInitialInfo.departureDate}
              />
            </div>
          </div>

          {/* Invitation Letter (image) */}
          <div className="col-12">
            <label htmlFor="visaInvitationLetterPDF">Invitation Letter</label>

            {/* <ViewPDFFile
                pdfURL={visaInvitationLetterPDF}
                modalTitleText="View Invitation Letter"
                openModalButtonText="View Invitation Letter"
                id="visaInvitationLetterPDF"
              /> */}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FormStep4;
