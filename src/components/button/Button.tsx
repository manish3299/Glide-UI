import React from "react";
import { motion } from "framer-motion";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`btn ${variant}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {label}
    </motion.button>
  );
};

export default Button;
