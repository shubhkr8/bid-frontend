import React from "react";
import "./InputBox.css";

const InputBox = (props) => {
  const { id, value, type, label, placeholder, onChange, required } = props;

  return (
    <div className="InputBox" id={`InputBox__${id}`}>
      <input
        className="InputBox-input"
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
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
