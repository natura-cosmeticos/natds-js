import React from "react";
import { ButtonProps } from "./Button.props";

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  label,
  ...props
}) => {

  return (
    <button
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};
