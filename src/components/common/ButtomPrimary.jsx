import React from "react";
import PropTypes from "prop-types";

const ButtonPrimary = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800 ${className}`}
    >
      {children}
    </button>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ButtonPrimary.defaultProps = {
  onClick: () => {},
  className: "",
};

export default ButtonPrimary;
