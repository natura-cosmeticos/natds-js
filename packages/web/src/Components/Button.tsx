import * as React from "react";
import * as MaterialButton from "@material-ui/core/Button";

import { withTheme } from "@material-ui/styles";

export type IButtonProps = MaterialButton.ButtonProps

export const Button: React.FunctionComponent<Omit<IButtonProps, "translate">> = React.forwardRef((
  props: Omit<IButtonProps, "translate">,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialButton.default {...props} ref={ref} />);

Button.displayName = "Button";

export default withTheme(Button);
