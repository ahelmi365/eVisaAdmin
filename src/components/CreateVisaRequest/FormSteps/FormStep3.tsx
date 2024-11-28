import { applicantInitialInfo } from "../../../utils/consts";

const FormStep3 = () => {
  return (
    <div className="row">
      <form name="PaymentForm">
        {/* Personal Informatio */}
        <fieldset className="styled-fieldset">
          <legend className="styled-legend">3. Personal Information</legend>
          {/* Full Name (Passport Name) */}
          {/* Gender */}
          <div className="row mb-3 d-flex flex-row-reverse">
            {/* right - id photo */}
            <div className="col-sm-12 col-md-6 mb-sm-4 mb-md-0">
              {/* <div className="document-id-container">
                  <ImagePreview
                    imageUrl={profilePhoto}
                    altText="document-ID"
                    title="Personal Photo"
                  />
                </div> */}
            </div>
            {/* Left */}
            <div className="col-sm-12 col-md-6 ">
              <label className="control-label" htmlFor="fullNameInpt">
                Full Name (Passport Name)
              </label>
              <input
                readOnly
                id="fullNameInpt"
                type="text"
                name="fullName"
                className="form-control mb-2"
                value={applicantInitialInfo.fullName}
              />

              <label className="control-label" htmlFor="genderInpt">
                Gender
              </label>
              <input
                readOnly
                id="genderInpt"
                type="text"
                name="gender"
                className="form-control mb-2"
                value={applicantInitialInfo.gender}
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
                className="form-control mb-2"
                value={applicantInitialInfo.dateOfBirth}
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
                className="form-control mb-2"
                value={applicantInitialInfo.mobileNumber}
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
                className="form-control mb-2"
                value={applicantInitialInfo.email}
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
              className="form-control mb-2"
              maxLength={500}
              value={applicantInitialInfo.currentAddress}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FormStep3;
