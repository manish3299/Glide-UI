import * as React from "react";

export interface BreadcrumbsProps {
  items: string[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2 text-sm">
        {items.map((item, idx) => (
          <li key={item} className="flex items-center">
            {idx > 0 && <span className="mx-1">/</span>}
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
};
