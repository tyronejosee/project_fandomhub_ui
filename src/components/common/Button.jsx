import React from "react";

const Button = ({ variant, onClick, children, icon, ...props }) => {
  let buttonClass =
    "h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  switch (variant) {
    case "primary":
      buttonClass +=
        " bg-neutral-800 dark:bg-neutral-200 hover:bg-neutral-950 dark:hover:bg-neutral-50 text-neutral-200 dark:text-neutral-800 ";
      break;
    case "secondary":
      buttonClass +=
        " bg-neutral-50 dark:bg-neutral-950 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800";
      break;
    default:
      break;
  }

  return (
    <button onClick={onClick} className={buttonClass} {...props}>
      {icon && React.cloneElement(icon, { className: "h-4 w-4 mr-2" })}
      {children}
    </button>
  );
};

export default Button;
