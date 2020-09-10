import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialLinearProgress, { LinearProgressProps as ILinearProgressProps } from "@material-ui/core/LinearProgress";

export { LinearProgressProps as ILinearProgressProps } from "@material-ui/core/LinearProgress";

export const LinearProgress: FunctionComponent<Omit<ILinearProgressProps, "translate">> = forwardRef((
  props: Omit<ILinearProgressProps, "translate">,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialLinearProgress {...props} ref={ref} />);

LinearProgress.displayName = "LinearProgress";

export default withTheme(LinearProgress);
