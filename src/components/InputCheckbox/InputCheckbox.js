import React from "react";

const InputCheckbox = (props) => {
  const { id, name, value, type, label, initialValue, updateValue } = props;

  const handleInternalonChange = (e) => {
    updateValue({
      ...initialValue,
      [e.target.name]: [...initialValue.material_series, e.target.value],
    });
  };

  return (
    <div className="InputCheckbox">
      <input
        className="InputCheckbox-input"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleInternalonChange}
      />
      <label htmlFor={id} className="InputCheckbox-label">
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;
