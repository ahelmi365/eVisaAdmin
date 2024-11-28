import { applicantInitialInfo } from "../../../utils/consts";

const FormStep4 = () => {
  return (
    <div className="row">
      <form name="PaymentForm">
        {/* Emergency Contact */}
        <fieldset className="styled-fieldset">
          <legend className="styled-legend">5. Emergency Contact</legend>
          <div className="row mb-2">
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Emergency Contact Name</label>
              <input
                readOnly
                id="emergencyContactNameInpt"
                type="text"
                name="emergencyContactName"
                className="form-control mb-2"
                value={applicantInitialInfo.emergencyContactName}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Emergency Contact Number</label>
              <input
                readOnly
                id="emergencyContactNumberInpt"
                type="text"
                name="emergencyContactNumber"
                className="form-control mb-2"
                value={applicantInitialInfo.emergencyContactNumber}
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FormStep4;
