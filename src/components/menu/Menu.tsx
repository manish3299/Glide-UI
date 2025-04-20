import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface MenuProps {
  items: string[];
}

export const Menu: React.FC<MenuProps> = ({ items }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-1 border rounded"
      >
        Menu
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="absolute bg-white border rounded shadow mt-2"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            {items.map((item) => (
              <li key={item} className="px-4 py-2 hover:bg-gray-100">
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
