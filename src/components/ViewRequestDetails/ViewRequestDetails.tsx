const ViewRequestDetails = () => {
  return (
    <div className="view-request-details-container">
      <h4>View Request Details</h4>

      <div className="row mb-3">
        <form className="form-horizontal" name="vm.PaymentForm">
          <div className="row mb-3">
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Application Number</label>
              <input
                readOnly
                disabled
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
                disabled
                id="visaTypeInpt"
                type="text"
                name="visaType"
                className="form-control"
                value="Business"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Entries Number</label>
              <input
                readOnly
                disabled
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
                disabled
                id="durationInpt"
                type="text"
                name="durationInpt"
                className="form-control"
                value="14"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-12 col-md-6">
              <label className="control-label">
                Do you have a previous visa?
              </label>

              <input
                readOnly
                disabled
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
                disabled
                id="PreviousVisaNumberInpt"
                type="text"
                name="PreviousVisaNumberInpt"
                className="form-control"
                value=""
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Purpose Of Visit</label>
              <input
                readOnly
                disabled
                id="purposeOfVisitInpt"
                type="text"
                name="purposeOfVisit"
                className="form-control"
                value="Attend Meeting"
              />
            </div>
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
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Full Name (Passport Name)</label>
              <input
                readOnly
                disabled
                id="fullNameInpt"
                type="text"
                name="fullName"
                className="form-control"
                value="Ali Helmi"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="control-label">
                Current Address (Where are you currently staying)
              </label>
              <input
                id="addressInpt"
                name="address"
                readOnly
                disabled
                className="form-control"
                maxLength={500}
                value={"Cairo"}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Gender</label>
              <input
                readOnly
                disabled
                id="genderInpt"
                type="text"
                name="gender"
                className="form-control"
                value="Male"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="control-label">
                Date Of Birth<span>*</span>
              </label>

              <input
                readOnly
                disabled
                id="birthDateInpt"
                type="text"
                name="date"
                className="form-control"
                value="1986/05/31"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-12 col-md-6">
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
            </div>
            <div className="col-sm-12 col-md-6">
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
          <div className="row mb-3">
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Mobile Number</label>
              <input
                readOnly
                disabled
                id="mobNumberInpt"
                type="text"
                name="phoneNumber"
                className="form-control"
                value="20 - 01188566998"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Email</label>
              <div className="">
                <input
                  readOnly
                  disabled
                  id="emailInpt"
                  type="text"
                  name="email"
                  className="form-control"
                  value="mm@yahoo.com"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Emergency Contact Name</label>
              <input
                readOnly
                disabled
                id="emergencyContactNameInpt"
                type="text"
                name="emergencyContactName"
                className="form-control"
                value="Kamel Fahd"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="control-label">Emergency Contact Number</label>
              <input
                readOnly
                disabled
                id="emergencyContactNumberInpt"
                type="text"
                name="emergencyContactNumber"
                className="form-control"
                value="02-01288556688"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="row gap-4 mt-4">
        <div className="col-sm-12 col-md-3">
          <button className="btn btn-primary w-100">Accept</button>
        </div>
        <div className="col-sm-12 col-md-3">
          <button className="btn btn-danger w-100">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default ViewRequestDetails;
