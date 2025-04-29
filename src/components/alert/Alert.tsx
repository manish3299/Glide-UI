import * as React from "react";
import { motion } from "framer-motion";

export interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
}

export const Alert: React.FC<AlertProps> = ({ message, type = "info" }) => {
  const bgColor = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
  }[type];

  return (
    <motion.div
      className={`p-3 rounded ${bgColor}`}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {message}
    </motion.div>
  );
};

export default Alert;
