import React from "react";
import "./InputCheckbox.css";

const InputCheckbox = (props) => {
  const { id, type, label, onChange, checked } = props;

  return (
    <div className="InputCheckbox">
      <label className="InputCheckbox__container">
        {label}
        <input id={id} type={type} onChange={onChange} checked={checked} />
        <span className="InputCheckbox__checkmark"></span>
      </label>
    </div>
  );
};

export default InputCheckbox;
