import PropTypes from "prop-types";
import { useState } from "react";

import OpenEyeball from "../icons/OpenedEyeball";
import ClosedEyeball from "../icons/ClosedEyeball";

const FieldInput = ({
  type = defaultProps.type,
  label,
  value = defaultProps.value,
  placeholder = defaultProps.placeholder,
  textError = defaultProps.textError,
  isRequired = defaultProps.isRequired,
  isError = defaultProps.isError,
  onChange = () => {},
}) => {
  const [isVisiblePasswordButtonValue, setIsVisiblePasswordButtonValue] =
    useState(false);

  const getInputType = (type) => {
    if (isVisiblePasswordButtonValue) return "text";

    return type;
  };

  return (
    <div className="flex flex-col">
      <label className="px-2">
        {isRequired && <span className="text-red-700 mr-1">*</span>}
        {label}:
      </label>
      <div className="flex relative">
        <input
          className="grow bg-tertiary rounded-md focus:border-none focus:outline-none p-2"
          type={getInputType(type)}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {(type == "password" || isVisiblePasswordButtonValue) && (
          <button
            className="absolute top-2.5 right-1"
            onClick={() =>
              setIsVisiblePasswordButtonValue(!isVisiblePasswordButtonValue)
            }
          >
            {!isVisiblePasswordButtonValue ? <OpenEyeball /> : <ClosedEyeball />} 
          </button>
        )}
      </div>

      {
        <span className="text-autumn mt-1 bold">
          {isError ? textError : ""}
        </span>
      }
    </div>
  );
};

FieldInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textError: PropTypes.string,
  isError: PropTypes.bool,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  isRequired: false,
  isError: false,
};

export default FieldInput;
