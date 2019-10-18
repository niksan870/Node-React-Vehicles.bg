import React from "react";
import PropTypes from "prop-types";

const CheckboxGroup = ({ name, placeholder, value, onChange, checked }) => {
  return (
    <div className="col">
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={checked}
        id={value}
      />
      <label htmlFor={value}>{placeholder}</label>
    </div>
  );
};

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

CheckboxGroup.defaultProps = {
  type: "text"
};

export default CheckboxGroup;
