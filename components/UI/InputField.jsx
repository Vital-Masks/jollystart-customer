import { Field } from "formik";
import React from "react";

const InputField = ({
  name,
  label,
  required,
  value,
  onChange,
  type,
  error,
  placeholder,
  max,
  min,
  disabled,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="ml-2">
        {label}
        {required && <span className="text-red-500">*</span>}{" "}
      </label>
      <Field
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder && placeholder}
        className="p-2 ps-4 bg-transparent border rounded-full"
        max={max && max}
        min={min && min}
        disabled={disabled ? true : false}
      />

      {error && <p className="text-red-400 ps-4"> {error}</p>}
    </div>
  );
};

export default InputField;
