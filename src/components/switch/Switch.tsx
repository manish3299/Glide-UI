import * as React from "react";
import { motion } from "framer-motion";

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <motion.button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="inline-flex items-center w-12 h-6 rounded-full bg-gray-300"
      animate={{ backgroundColor: checked ? "#4ade80" : "#d1d5db" }}
    >
      <motion.span
        layout
        className="inline-block w-6 h-6 bg-white rounded-full shadow"
      />
    </motion.button>
  );
};

export default Switch;
