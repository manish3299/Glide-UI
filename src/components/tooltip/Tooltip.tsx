import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TooltipProps = {
  isOpen: boolean;
  children: ReactNode;
  content: ReactNode;
  placement?: 'top' | 'bottom';
};

export const Tooltip = ({ isOpen, children, content, placement = 'top' }: TooltipProps) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: placement === 'top' ? -4 : 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: placement === 'top' ? -4 : 4 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              [placement]: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: placement === 'bottom' ? 8 : 0,
              marginBottom: placement === 'top' ? 8 : 0,
              padding: '6px 10px',
              background: '#333',
              color: '#fff',
              borderRadius: 4,
              fontSize: 12,
              whiteSpace: 'nowrap',
              zIndex: 1000,
            }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
