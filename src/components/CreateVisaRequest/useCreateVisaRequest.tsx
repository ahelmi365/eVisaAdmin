import { useEffect, useRef, useState } from "react";

const useCreateVisaReqeust = () => {
  const steps = [
    {
      number: 1,
      name: "1",
      toolTipText: "Personal Information",
    },
    {
      number: 2,
      name: "2",
      toolTipText: "Application Details",
    },
    {
      number: 3,
      name: "3",
      toolTipText: "Passport and Travel Information",
    },
    {
      number: 4,
      name: "4",
      toolTipText: "Emergency Contact",
    },
    {
      number: 5,
      name: "5",
      toolTipText: "Review and Submit",
    },
    {
      number: 6,
      name: "6",
      toolTipText: "Visa Payment",
    },
  ];

  const progressBarRef = useRef<HTMLProgressElement>(null);

  const [currentStep, setCuurentStep] = useState(1);

  const stepProgressValue = Number((100 / steps.length).toFixed(0));

  const updateProgressbarValue = () => {
    if (progressBarRef.current) {
      progressBarRef.current.value = (100 / steps.length) * currentStep;
      // if current = 1              (100 /      6     )  *       1      = 17
      // if current = 2              (100 /      6     )  *       2      = 34
      // if current = 3              (100 /      6     )  *       3      = 51
    }
  };

  useEffect(() => {
    updateProgressbarValue();
  }, [currentStep]);
  return {
    steps,
    currentStep,
    setCuurentStep,
    progressBarRef,
    stepProgressValue,
  };
};

export default useCreateVisaReqeust;
