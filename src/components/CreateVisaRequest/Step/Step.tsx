import { useEffect } from "react";
import "./Step.css";
import * as bootstrap from "bootstrap";
interface IStep {
  number: number;
  name: string;
  toolTipText: string;
}

interface IProps {
  step: IStep;
  active: boolean;
  includeConnector: boolean;
  setCuurentStep: React.Dispatch<React.SetStateAction<number>>;
}
const Step = ({ step, active, setCuurentStep, includeConnector }: IProps) => {
  useEffect(() => {
    // Initialize all tooltips after the component is mounted
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    // Cleanup tooltips when the component unmounts
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);
  return (
    <>
      <button
        className={`step ${
          active ? "active" : ""
        } px-2 py-sm-2 px-sm-3 px-md-4`}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title={step.toolTipText}
        onClick={() => {
          setCuurentStep(step.number);
        }}
        type="button"
      >
        <div className="step-name">{step.name}</div>
      </button>
      {includeConnector && (
        <div className={`connector ${active ? "active" : ""}`}></div>
      )}
    </>
  );
};

export default Step;
