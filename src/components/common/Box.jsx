import PropTypes from "prop-types";

const Box = ({ children }) => {
  return <div className="w-full flex rounded-lg p-4 bg-secondary">{children}</div>;
};

Box.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Box;
