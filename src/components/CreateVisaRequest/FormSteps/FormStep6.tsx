import { useRef, useState } from "react";
import visaCards from "../../../assets/images/visaCards.jpg";
import { useNavigate } from "react-router-dom";

const FormStep6 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate  = useNavigate()

  const handlePayNow = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/landing")
    }, 3000);
  };
  return (
    <div className="row">
      <div className="col-12 text-center">
        <img src={visaCards} alt="accepted visa cards" width={"500px"} />
      </div>
      <form name="PaymentForm">
        {/* Passport and Travel Information */}
        <fieldset className="styled-fieldset">
          <legend className="styled-legend mb-4">5. Visa Payment</legend>

          <div className="row">
            {/* Card Number */}
            <div className="col-sm-12 col-md-6">
              <label htmlFor="cardNumber" className="form-label">
                Card Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                placeholder="Enter your card number"
                maxLength={16}
                required
                defaultValue={1234567891234567}
              />
            </div>

            {/* Card Holder */}
            <div className="col-sm-12 col-md-6">
              <label htmlFor="cardHolder" className="form-label">
                Card Holder:
              </label>
              <input
                type="text"
                className="form-control"
                id="cardHolder"
                placeholder="Enter cardholder's name"
                required
                defaultValue={"Sarah Martin"}
              />
            </div>
          </div>

          <div className="row mt-2">
            {/* Expiry Date */}
            <div className="col-sm-12 col-md-6">
              <label htmlFor="expiryDate" className="form-label">
                Expiry Date:
              </label>
              <div className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control"
                  id="expiryDate"
                  placeholder="MM"
                  maxLength={2}
                  required
                  defaultValue={10}
                />
                <span className="align-self-center">/</span>
                <input
                  type="text"
                  className="form-control"
                  id="expiryDateYear"
                  placeholder="YY"
                  maxLength={2}
                  required
                  defaultValue={30}
                />
              </div>
            </div>
            {/* CVV */}
            <div className="col-sm-12 col-md-6">
              <label htmlFor="cvv" className="form-label">
                CVV:
              </label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                placeholder="Enter CVV"
                maxLength={3}
                required
                defaultValue={555}
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-6 mt-2">
            <label className="form-label" htmlFor="brand">
              Brand
            </label>
            <select
              className="form-select"
              name="brand"
              id="brand"
              defaultValue={"MasterCard"}
            >
              <option value={"-1"}>Please Select</option>
              <option value="MasterCard">MasterCard</option>
              <option value="Visa">Visa</option>
              <option value="VisaElectron">Visa Electron</option>
              <option value="Mastereo">Mastereo</option>
              <option value="Solo">Solo</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-start gap-4 mt-4">
            <button
              type="button"
              className="btn btn-dark w-25"
              onClick={handlePayNow}
              disabled={isLoading}
            >
              Pay Now
            </button>

            {isLoading && (
              <div
                className="d-flex justify-content-center top-0"
                id="loadingSpinner"
              >
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FormStep6;
