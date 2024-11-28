import { ChangeEvent, useState } from "react";
import grayAvatar from "../../../assets/images/grayAvatar.png";
import { applicantInitialInfo, countries } from "../../../utils/consts";
import ImagePreview from "../../ImagePreview/ImagePreview";
const FormStep1 = () => {
  const [imageUrl, setImageUrl] = useState(grayAvatar);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      const imageSrc = URL.createObjectURL(file); // Create a temporary URL
      setImageUrl(imageSrc); // Update the state
    }
  };

  return (
    <form action="">
      {/* Personal Informatio */}
      <fieldset className="styled-fieldset">
        <legend className="styled-legend">1. Personal Information</legend>
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

            <div className="document-id-container">
              <ImagePreview
                imageUrl={imageUrl}
                altText="document-ID"
                // title="Personal Photo"
              />

              <label htmlFor="personalPhoto">Personal Photo</label>

              <input
                className="form-control mt-4"
                type="file"
                name="personalPhoto"
                id="personalPhoto"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
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
            <select
              id="genderInpt"
              name="gender"
              className="form-select mb-2"
              defaultValue={applicantInitialInfo.gender}
            >
              <option value={"-1"}>Please select</option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>

            {/* Date Of Birth */}

            <label className="control-label" htmlFor="birthDateInpt">
              Date of Birth
            </label>

            <input
              // readOnly
              id="birthDateInpt"
              type="date"
              name="date"
              className="form-control mb-2"
              // value={applicantInitialInfo.dateOfBirth}
            />

            {/* Current Address (Where are you currently staying) */}

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
      </fieldset>

      {/* <fieldset> */}
      {/* <legend className="styled-legend">1. Select Your Country</legend> */}
      <div className="row mt-2">
        <div className="col-sm-12 col-md-6">
          <label htmlFor="country" className="fotm-label">
            You are citizen of:
          </label>
          <select
            name="country"
            id="country"
            className="form-select"
            required
            defaultValue={countries[0].value}
          >
            <option value="-1">Please select</option>
            {countries.map((country) => (
              <option key={country.id} value={country.value}>
                {country.value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-12 col-md-6">
          <label htmlFor="livein" className="fotm-label">
            You lived in:
          </label>
          <select
            name="livein"
            id="livein"
            className="form-select"
            required
            defaultValue={countries[0].value}
          >
            <option value="-1">Please select</option>
            {countries.map((country) => (
              <option key={country.id} value={country.value}>
                {country.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* </fieldset> */}
    </form>
  );
};

export default FormStep1;
