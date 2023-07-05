import React from 'react';

const InputField = ({ name, label, required }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="ml-2">
        {label}
        {required && <span className="text-red-500">*</span>}{' '}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="p-2 bg-transparent border rounded-full"
      />
    </div>
  );
};

export default InputField;
