import React from "react";

const InputText = props => {
  const { name, value, onChange } = props;
  return (
    <div>
      <input
        type="text"
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
