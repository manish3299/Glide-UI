import * as React from "react";
import { motion } from "framer-motion";

export interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <motion.span
      className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {text}
    </motion.span>
  );
};
