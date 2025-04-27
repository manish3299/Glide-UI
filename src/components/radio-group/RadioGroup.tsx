import * as React from "react";
import { motion } from "framer-motion";

export interface RadioGroupProps {
  options: string[];
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  value,
  onChange,
}) => {
  return (
    <div role="radiogroup">
      {options.map((opt) => (
        <label key={opt}>
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: value === opt ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-checked={value === opt}
            role="radio"
          >
            {opt}
          </motion.span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
