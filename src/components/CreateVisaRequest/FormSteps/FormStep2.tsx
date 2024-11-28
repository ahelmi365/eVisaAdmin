import { EntriesNumber, VisaType } from "../../../types/interfaces";
import { applicantInitialInfo } from "../../../utils/consts";

const FormStep2 = () => {
  return (
    <div className="row">
      <form name="PaymentForm">
        {/* Application Details */}
        <fieldset className="styled-fieldset">
          <legend className="styled-legend">2. Application Details</legend>

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
              <label className="control-label" htmlFor="visaType">
                Visa Type
              </label>
              <select
                id="visaType"
                name="visaType"
                className="form-select"
                defaultValue={VisaType.Business}
              >
                <option value={"-1"}>Please select</option>
                <option value={VisaType.Business}>{VisaType.Business}</option>
                <option value={VisaType.Touristic}>{VisaType.Touristic}</option>
              </select>
            </div>
          </div>

          {/* Entries Number */}
          {/* Duration Of Stay */}
          <div className="row mb-2">
            <div className="col-sm-12 col-md-6">
              <label className="control-label" htmlFor="numberOfEntriesInpt">
                Entries Number
              </label>
              <select
                id="numberOfEntriesInpt"
                name="numberOfEntriesInpt"
                className="form-select"
                defaultValue={EntriesNumber.Single}
              >
                <option value={"-1"}>Please select</option>
                <option value={EntriesNumber.Single}>
                  {EntriesNumber.Single}
                </option>
                <option value={EntriesNumber.Double}>
                  {EntriesNumber.Double}
                </option>
              </select>
            </div>

            <div className="col-sm-12 col-md-6">
              <label className="control-label" htmlFor="durationInpt">
                Duration Of Stay
              </label>
              <input
                readOnly
                id="durationInpt"
                type="number"
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

              <select
                id="PreviousVisaInpt"
                name="PreviousVisa"
                className="form-select"
                defaultValue={applicantInitialInfo.haveapreviousvisa}
              >
                <option value={"-1"}>Please select</option>
                <option value={"Yes"}>Yes</option>
                <option value={"No"}>No</option>
              </select>
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
