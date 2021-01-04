import MaterialInput from "@material-ui/core/Input";
import * as React from "react";
import { IInputProps } from "./Input.props";

export { IInputProps } from "./Input.props";

export const Input = React.forwardRef<unknown, IInputProps>(
  (props: IInputProps, ref: IInputProps["ref"]) => {

    const {
      disabled,
      hasIcon,
      multiline,
      rows,
      state,
      ...otherProps
    } = props;

    return <MaterialInput
      {...otherProps}
      data-state={state}
      disabled={disabled}
      multiline={multiline}
      ref={ref}
      rows={rows}
    />;
  },
);
Input.displayName = "Input";
export default Input;
