import * as React from "react";
import { motion } from "framer-motion";
import type { TextareaHTMLAttributes } from "react";
import type { HTMLMotionProps } from "framer-motion";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.textarea
        ref={ref}
        className={className}
        whileFocus={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200 }}
        {...(props as HTMLMotionProps<"textarea">)}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
