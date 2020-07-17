import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialDivider, { DividerProps as IDividerProps } from "@material-ui/core/Divider";
export { DividerProps as IDividerProps } from "@material-ui/core/Divider";

export const Divider: FunctionComponent<Omit<IDividerProps, "translate">> = forwardRef((
  props: Omit<IDividerProps, "translate">,
  ref: any
) => <MaterialDivider {...props} ref={ref} />);

export default withTheme(Divider);
