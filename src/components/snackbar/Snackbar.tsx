import React from "react";
import { motion } from "framer-motion";

interface SnackbarProps {
  message: string;
  isVisible: boolean;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, isVisible }) => {
  return isVisible ? (
    <motion.div
      className="snackbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {message}
    </motion.div>
  ) : null;
};

export default Snackbar;
