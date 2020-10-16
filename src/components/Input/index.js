import React from "react";

function Input(props) {
  const { name, onChange, label } = props;

  return (
    <>
      {label && <label>{label}</label>}
      <input
        type="wrong"
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </>
  );
}

export default Input;
