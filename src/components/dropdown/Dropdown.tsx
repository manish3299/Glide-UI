import React, { ReactNode, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownProps = {
  isOpen: boolean;
  children: ReactNode; // Trigger element should handle its own accessibility attributes (e.g., aria-expanded)
  items: string[];
  onSelect: (item: string) => void;
};

export const Dropdown = ({
  isOpen,
  children,
  items,
  onSelect,
}: DropdownProps) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const menu = menuRef.current;
    const focusableItems = (): HTMLElement[] =>
      Array.from(menu.querySelectorAll('li[tabIndex="0"]')) as HTMLElement[];

    const handleKeyDown = (e: KeyboardEvent) => {
      const items = focusableItems();
      const currentIndex = items.indexOf(document.activeElement as HTMLElement);
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (items.length === 0) break;
          const next = items[(currentIndex + 1) % items.length];
          next.focus();
          break;
        case "ArrowUp":
          e.preventDefault();
          if (items.length === 0) break;
          const prev = items[(currentIndex - 1 + items.length) % items.length];
          prev.focus();
          break;
        case "Escape":
          e.preventDefault();
          // Optionally, you might want to call a prop to close the menu here.
          (document.activeElement as HTMLElement)?.blur();
          break;
        default:
          break;
      }
    };

    menu.addEventListener("keydown", handleKeyDown);
    return () => menu.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={menuRef}
            role="menu"
            aria-label="Dropdown menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              marginTop: 8,
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: 4,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              padding: "4px 0",
              zIndex: 1000,
              minWidth: 160,
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                role="menuitem"
                tabIndex={0}
                onClick={() => onSelect(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(item);
                  }
                }}
                style={{
                  padding: "8px 12px",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
