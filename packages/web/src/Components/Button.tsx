import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialButton, { ButtonProps as IButtonProps } from "@material-ui/core/Button";

export { ButtonProps as IButtonProps } from "@material-ui/core/Button";

export const Button: FunctionComponent<Omit<IButtonProps, "translate">> = forwardRef((
  props: Omit<IButtonProps, "translate">,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialButton {...props} ref={ref} />);

Button.displayName = "Button";

export default withTheme(Button);
