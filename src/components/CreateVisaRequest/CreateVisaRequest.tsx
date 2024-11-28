import Step from "./Step/Step";

// css
import "./CreateVisaRequest.css";
import FormStep1 from "./FormSteps/FormStep1";
import FormStep2 from "./FormSteps/FormStep2";
import FormStep3 from "./FormSteps/FormStep3";
import useCreateVisaReqeust from "./useCreateVisaRequest";
import FormStep4 from "./FormSteps/FormStep4";
import FormStep5 from "./FormSteps/FormStep5";

const CreateVisaRequest = () => {
  const {
    steps,
    currentStep,
    setCuurentStep,
    progressBarRef,
    stepProgressValue,
  } = useCreateVisaReqeust();

  return (
    <div>
      <h4>Create Visa Request</h4>

      <div className="steps-continer mt-4">
        <div className="steps-nav">
          {steps.map((step, index) => (
            <Step
              key={index}
              step = {step}
              active={currentStep >= step.number}
              setCuurentStep={setCuurentStep}
              includeConnector={step.number < steps.length}
            />
          ))}
        </div>
        {/* Progress Bar */}
        <div className="progress-bar">
          <progress
            max="100"
            value={stepProgressValue}
            className="w-100"
            ref={progressBarRef}
          ></progress>
        </div>

        {/* Navigation Button */}
        <div className="navigation-buttons d-flex gap-4 mt-2 justify-content-center">
          {/* Previous */}
          <button
            className="btn btn-primary py-2 px-4"
            disabled={currentStep === 1}
            onClick={() => {
              setCuurentStep(currentStep - 1);
            }}
          >
            <span style={{ fontWeight: "bold" }}>&laquo;</span> Prev
          </button>
          {/* NEXT */}
          <button
            className="btn btn-primary py-2 px-4"
            disabled={currentStep === 6}
            onClick={() => {
              setCuurentStep(currentStep + 1);
            }}
          >
            Next <span style={{ fontWeight: "bold" }}>&raquo;</span>
          </button>
        </div>

        <div className="steps-content">
          {currentStep === 1 && <FormStep1 />}
          {currentStep === 2 && <FormStep2 />}
          {currentStep === 3 && <FormStep3 />}
          {currentStep === 4 && <FormStep4 />}
          {currentStep === 5 && <FormStep5 />}
        </div>
      </div>
    </div>
  );
};

export default CreateVisaRequest;
