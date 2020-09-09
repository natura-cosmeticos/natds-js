import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialCircularProgress, { CircularProgressProps as ICircularProgressProps } from "@material-ui/core/CircularProgress";

export { CircularProgressProps as ICircularProgressProps } from "@material-ui/core/CircularProgress";

export const CircularProgress: FunctionComponent<Omit<ICircularProgressProps, "translate">> = forwardRef((
  props: Omit<ICircularProgressProps, "translate">,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialCircularProgress {...props} ref={ref} />);

CircularProgress.displayName = "CircularProgress";

export default withTheme(CircularProgress);
