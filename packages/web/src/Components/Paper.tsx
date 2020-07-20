import React, { FunctionComponent, forwardRef } from "react";
import MaterialPaper, {
  PaperProps as IPaperProps,
} from "@material-ui/core/Paper";

export { PaperProps as IPaperProps } from "@material-ui/core/Paper";

const Paper: FunctionComponent<IPaperProps> = forwardRef((
  props: IPaperProps,
  ref: any,
) => <MaterialPaper {...props} ref={ref} />);

export default Paper;
