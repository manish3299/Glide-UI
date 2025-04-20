import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>{value}</button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="absolute z-10 bg-white shadow rounded"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                >
                  {opt}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
