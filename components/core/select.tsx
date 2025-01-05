import React from 'react';

interface SelectProps {
  options: string[]; // Assuming options are strings, adjust type accordingly
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="form-select text-black rounded-full border-dark" >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
