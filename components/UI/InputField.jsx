import React from "react";

const InputField = ({ name, label, required, value, onChange, type,error }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="ml-2">
        {label}
        {required && <span className="text-red-500">*</span>}{" "}
      </label>
      <input
        type={type ? type : "text"}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="p-2 ps-4 bg-transparent border rounded-full"
      />
       {error && <p className="text-red-400 ps-4">  {error}</p>}
    </div>
  );
};

export default InputField;
