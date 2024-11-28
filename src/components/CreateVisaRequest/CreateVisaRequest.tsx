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
    updateProgressbarValue,
  } = useCreateVisaReqeust();

  return (
    <div>
      <h6>Create Visa Request</h6>

      <div className="steps-continer mt-4">
        <div className="steps-nav">
          {steps.map((step, index) => (
            <Step
              key={index}
              name={step.name}
              number={step.number}
              active={currentStep >= step.number}
              setCuurentStep={setCuurentStep}
              includeConnector={step.number < steps.length}
            />
          ))}
        </div>

        <div className="progress-bar">
          <progress
            max="100"
            value={stepProgressValue}
            className="w-100"
            ref={progressBarRef}
          ></progress>
        </div>
        <div className="navigation-buttons d-flex gap-4 mt-4 justify-content-center">
          <button
            className="btn btn-primary"
            disabled={currentStep === 1}
            onClick={() => {
              setCuurentStep(currentStep - 1);
            }}
          >
            ← Prev
          </button>
          <button
            className="btn btn-primary"
            disabled={currentStep === 6}
            onClick={() => {
              setCuurentStep(currentStep + 1);
            }}
          >
            Next →
          </button>
        </div>

        <div className="steps-content card p-4">
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
