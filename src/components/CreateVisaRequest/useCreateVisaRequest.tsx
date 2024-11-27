import { useRef, useState } from "react";

const useCreateVisaReqeust = () => {
  const steps = [
    {
      number: 1,
      name: "Step One",
    },
    {
      number: 2,
      name: "Step Two",
    },
    {
      number: 3,
      name: "Step Three",
    },
    {
      number: 4,
      name: "Step Four",
    },
    {
      number: 5,
      name: "Step Five",
    },
    {
      number: 6,
      name: "Step Six",
    },
  ];

  const progressBarRef = useRef<HTMLProgressElement>(null);

  const [currentStep, setCuurentStep] = useState(1);

  return { steps, currentStep, setCuurentStep, progressBarRef };
};

export default useCreateVisaReqeust;
