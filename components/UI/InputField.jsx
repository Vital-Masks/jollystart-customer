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
  options, // New prop for select options
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="ml-2">
        {label}
        {required && <span className="text-red-500">*</span>}{" "}
      </label>

      {/* If type is "select", render a select dropdown */}
      {type === "select" ? (
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="p-2 ps-4 bg-transparent border rounded-full"
          disabled={disabled ? true : false}
        >
          <option value="">Select {label}</option>
          {options?.map((option) => (
            <option key={option} value={option} className="lowercase">
              {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
            </option>
          ))}
        </select>
      ) : (
        // Otherwise render a standard input field
        <input
          type={type || "text"}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="p-2 ps-4 bg-transparent border rounded-full"
          placeholder={placeholder}
          max={max}
          min={min}
          disabled={disabled ? true : false}
        />
      )}

      {error && <p className="text-red-400 ps-4">{error}</p>}
    </div>
  );
};

export default InputField;
