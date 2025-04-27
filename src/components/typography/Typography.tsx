import React from "react";

export interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "p";
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  const Tag = variant;
  return <Tag>{children}</Tag>;
};

export default Typography;
