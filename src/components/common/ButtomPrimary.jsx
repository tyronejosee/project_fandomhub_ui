import React from "react";
import PropTypes from "prop-types";

const ButtonPrimary = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-fuchsia-600 text-white hover:bg-fuchsia-600/10 h-9 px-4 py-2 ${className}`}
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
