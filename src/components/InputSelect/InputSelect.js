import React from "react";
import "./InputSelect.css";

const InputSelect = (props) => {
  const { label, id, name, options, initialValue, placeholder, updateValue } =
    props;

  const handleInternalonChange = (e) => {
    updateValue({ ...initialValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="InputSelect">
      <label htmlFor={id} className="InputSelect-label">
        {label}
      </label>
      <select name={name} id={id} onChange={handleInternalonChange}>
        <option>{placeholder}</option>
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
