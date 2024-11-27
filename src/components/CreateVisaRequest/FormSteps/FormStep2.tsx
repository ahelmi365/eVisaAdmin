import { applicantInitialInfo } from "../../../utils/consts";

const FormStep2 = () => {
  return (
    <div className="row my-3">
      <form name="PaymentForm">
        {/* Application Details */}
        <fieldset className="styled-fieldset mb-4">
          <legend className="styled-legend">Application Details</legend>

          {/* Application Number */}
          {/* Visa Type */}

          <div className="row mb-2">
            <div className="col-sm-12 col-md-6">
              <label className="control-label" htmlFor="applicationNumber">
                Application Number
              </label>
              <input
                readOnly
                id="applicationNumber"
                type="text"
                name="passportNumber"
                className="form-control"
                value={applicantInitialInfo.applicationNumber}
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
                value={applicantInitialInfo.visaType}
              />
            </div>
          </div>

          {/* Entries Number */}
          {/* Duration Of Stay */}
          <div className="row mb-2">
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
                value={applicantInitialInfo.entriesNumber}
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
                value={applicantInitialInfo.durationOfStay}
              />
            </div>
          </div>

          {/* Do you have a previous visa? */}
          {/* Previous Visa Number */}

          <div className="row mb-2">
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
                value={applicantInitialInfo.haveapreviousvisa}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="control-label" htmlFor="PreviousVisaNumberInpt">
                Pervious Visa Number
              </label>
              <input
                readOnly
                id="PreviousVisaNumberInpt"
                type="text"
                name="PreviousVisaNumberInpt"
                className="form-control"
                value={applicantInitialInfo.perviousVisaNumber}
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
              value={applicantInitialInfo.purposeOfVisit}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FormStep2;
