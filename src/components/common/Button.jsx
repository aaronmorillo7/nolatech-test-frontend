import PropTypes from "prop-types";

const getButtonColor = (isDisabled, color) => {
  if (isDisabled) return "bg-disabled cursor-not-allowed";

  return `${color} hover:bg-opacity-90`;
};

const handleClickButton = (event, isDisabled, onClick) => {
    if (isDisabled) {
        event.preventDefault()
        return 
    }

    onClick(event)
}

const Button = ({
  text = defaultProps.text,
  color = defaultProps.color,
  isDisabled = defaultProps.isDisabled,
  onClick = () => {},
}) => {
  return (
    <button
      className={`${getButtonColor(isDisabled, color)} rounded-md p-2`}
      onClick={(event) => handleClickButton(event, isDisabled, onClick)}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  text: "",
  color: "bg-autumn",
  isDisabled: false,
};

export default Button;
