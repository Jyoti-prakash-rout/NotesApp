import React from "react";

const SelectInput = ({ name, label, type, value, onChange, options }) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor={name} className="block font-semibold">
          {label}
        </label>
        <select
          name={name}
          type={type}
          className="w-full p-2 border rounded-lg"
          value={value}
          onChange={onChange}>
          {options.map((options) => (
            <option key={ options.value }>
              {options.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectInput;
