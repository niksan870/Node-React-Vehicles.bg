import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputRadio = ({
  name,
  value,
  error,
  icon,
  onChange,
  placeholder,
  checked
}) => {
  return (
    <label className="d-block">
      <div className="form-check">
        <input
          className={classnames("form-check-input", {
            "is-invalid": error
          })}
          name={name}
          type="radio"
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <span className="input-group-text">
          <span style={{ margin: "0 auto" }}>
            <i className={icon} />
            {placeholder}
          </span>
        </span>
      </div>
    </label>
  );
};

InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.string.isRequired
};

InputRadio.defaultProps = {
  type: "text"
};

export default InputRadio;
