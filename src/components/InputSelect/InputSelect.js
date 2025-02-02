import React from "react";
import "./InputSelect.css";

const InputSelect = (props) => {
  const { label, options, placeholder, onChange, value, required } = props;
  return (
    <div className="InputSelect">
      <label className="InputSelect-label">{label}</label>
      <select value={value} onChange={onChange} required={required}>
        <option value=''>{placeholder}</option>
        {options.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

InputSelect.defaultProps = {
  placeholder: "Choose",
};

export default InputSelect;
