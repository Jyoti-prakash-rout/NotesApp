import React from "react";

const TextInput = ({
  name,
  type,
  value,
  onChange,
  label,
  required = false,
}) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="" className="block font-semibold">
          Title
        </label>
        <input
          name={name}
          type={type}
          className="w-full p-2 border rounded-lg"
          value={value}
          onChange={onChange}
          label={label}
          required={required}
        />
      </div>
    </>
  );
};

export default TextInput;
