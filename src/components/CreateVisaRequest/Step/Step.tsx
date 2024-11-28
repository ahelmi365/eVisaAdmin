import "./Step.css";

interface IProps {
  number: number;
  name: string;
  active: boolean;
  includeConnector: boolean;
  setCuurentStep: React.Dispatch<React.SetStateAction<number>>;
}
const Step = ({
  number,
  name,
  active,
  setCuurentStep,
  includeConnector,
}: IProps) => {
  return (
    <>
      <button
        className={`step ${active ? "active" : "not-active"}`}
        onClick={() => {
          setCuurentStep(number);
        }}
      >
        <div className="step-name">{name}</div>
      </button>
      {includeConnector && (
        <div className={`connector ${active ? "active" : "not-active"}`}></div>
      )}
    </>
  );
};

export default Step;
