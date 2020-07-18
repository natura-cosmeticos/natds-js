import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialButtonGroup, { ButtonGroupProps as IButtonGroupProps } from "@material-ui/core/ButtonGroup";
export { ButtonGroupProps as IButtonGroupProps } from "@material-ui/core/ButtonGroup";

export const ButtonGroup: FunctionComponent<IButtonGroupProps> = forwardRef((
  props: IButtonGroupProps,
  ref: any
) => <MaterialButtonGroup {...props} ref={ref} />);

export default withTheme(ButtonGroup);
