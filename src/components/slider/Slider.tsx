import * as React from "react";

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full"
    />
  );
};

export default Slider;
