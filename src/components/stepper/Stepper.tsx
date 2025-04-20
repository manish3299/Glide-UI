import * as React from "react";

export interface StepperProps {
  steps: string[];
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`text-sm ${
            index <= currentStep ? "font-bold" : "text-gray-400"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};
