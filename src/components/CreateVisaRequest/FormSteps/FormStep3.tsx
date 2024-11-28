import { applicantInitialInfo } from "../../../utils/consts";

import { ChangeEvent, useState } from "react";
import passportIcon from "../../../assets/images/passportIcon2.jpg";
import ImagePreview from "../../ImagePreview/ImagePreview";
const FormStep3 = () => {
  const [imageUrl, setImageUrl] = useState(passportIcon);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      const imageSrc = URL.createObjectURL(file); // Create a temporary URL
      setImageUrl(imageSrc); // Update the state
    }
  };
  return (
    <div className="row">
      <form name="PaymentForm">
        {/* Passport and Travel Information */}
        <fieldset className="styled-fieldset">
          <legend className="styled-legend">
            4. Passport and Travel Information
          </legend>
          {/* Passport Number */}
          {/* Passport Copy (image) */}

          <div className="row flex-row-reverse">
            {/* right - id photo */}
            <div className="col-sm-12 col-md-6 mb-sm-4 mb-md-0">
              <div className="passport-photo-container">
                <ImagePreview
                  imageUrl={imageUrl}
                  altText="Passport photo"
                  calassNames="rounded"
                  // title="Passport Copy"
                />

                <label htmlFor="personalPhoto">
                  Passport Copy (Images Only)
                </label>

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
                id="arrivalDateInpt"
                type="date"
                name="date"
                className="form-control mb-2"
                // value={applicantInitialInfo.arrivalDate}
              />
              <label className="control-label" htmlFor="departureDateInpt">
                Departure Date
              </label>

              <input
                id="departureDateInpt"
                type="date"
                name="date"
                className="form-control mb-2"
                // value={applicantInitialInfo.departureDate}
              />

              {/* upload image */}

              <label htmlFor="visaInvitationLetterPDF">
                Invitation Letter (PDF Only)
              </label>

              <input
                className="form-control"
                type="file"
                name="visaInvitationLetterPDF"
                id="visaInvitationLetterPDF"
                accept="application/pdf"
                // onChange={handleImageUpload}
              />
            </div>
          </div>

          {/* Invitation Letter (image) */}
          {/* <div className="col-12">
            <label htmlFor="visaInvitationLetterPDF">Invitation Letter</label>

            <ViewPDFFile
              pdfURL={visaInvitationLetterPDF}
              modalTitleText="View Invitation Letter"
              openModalButtonText="View Invitation Letter"
              id="visaInvitationLetterPDF"
            />
          </div> */}
        </fieldset>
      </form>
    </div>
  );
};

export default FormStep3;
