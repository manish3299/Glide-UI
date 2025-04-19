import React, { useState } from "react";

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => setChecked(!checked);

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleChecked}
        aria-label={label}
      />
      {label}
    </label>
  );
};

export default Checkbox;
