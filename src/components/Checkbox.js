import React from "react";

const Checkbox = props => {
  const { style, value, name, onChange } = props;
  return (
    <div>
      <input
        type="checkbox"
        style={style}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;
