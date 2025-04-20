import * as React from "react";
import { motion } from "framer-motion";

export interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded">
      <motion.div
        className="h-2 bg-blue-500 rounded"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      />
    </div>
  );
};
