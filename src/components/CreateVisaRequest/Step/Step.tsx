import "./Step.css";

interface IProps {
  number: number;
  name: string;
  active: boolean;
  setCuurentStep: React.Dispatch<React.SetStateAction<number>>;
}
const Step = ({ number, name, active, setCuurentStep }: IProps) => {
  return (
    <button
      className={`step ${active ? "active" : "not-active"}`}
      onClick={() => setCuurentStep(number)}
    >
      {/* <div className="step-number">{number}</div> */}
      <div className="step-name">{name}</div>
    </button>
  );
};

export default Step;
