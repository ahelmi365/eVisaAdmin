import React from "react";
import { countries } from "../../../utils/consts";

const FormStep1 = () => {
  return (
    <div className="">
      <h6>1. Select Your Country</h6>

      <form action="">
        <fieldset>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <label htmlFor="country" className="fotm-label">
                You are citizen of:
              </label>
              <select name="country" id="country" className="form-select" required>
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
              <select name="livein" id="livein" className="form-select" required>
              <option value="-1">Please select</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.value}>
                    {country.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FormStep1;
