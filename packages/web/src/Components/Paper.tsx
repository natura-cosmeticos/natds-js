import React, { FunctionComponent, forwardRef } from "react";
import MaterialPaper, {
  PaperProps as IPaperProps,
} from "@material-ui/core/Paper";

export { PaperProps as IPaperProps } from "@material-ui/core/Paper";

const Paper: FunctionComponent<IPaperProps> = forwardRef((
  props: IPaperProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialPaper {...props} ref={ref} />);

Paper.displayName = "Paper";

export default Paper;
