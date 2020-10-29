import * as React from "react";

export interface IInputStateHelpTextProviderProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  helpText?: string;
  id?: string;
  label?: string;
  readOnly?: boolean;
  required?: boolean;
  state: "error" | "success" | undefined;
}
