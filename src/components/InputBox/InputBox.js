import React from "react";
import "./InputBox.css";

const InputBox = (props) => {
  const {
    id,
    name,
    value,
    type,
    label,
    placeholder,
    initialValue,
    updateValue,
  } = props;

  const handleInternalonChange = (e) => {
    updateValue({ ...initialValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="InputBox" id={`InputBox__${id}`}>
      <input
        className="InputBox-input"
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInternalonChange}
      />
      <label htmlFor={id} className="InputBox-label">
        {label}
      </label>
    </div>
  );
};

InputBox.defaultProps = {
  placeholder: " ",
};

export default InputBox;
