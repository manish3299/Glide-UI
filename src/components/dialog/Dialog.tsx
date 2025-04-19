import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode } from "react";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="glide-dialog-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={onClose}
        >
          <motion.div
            className="glide-dialog-content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
