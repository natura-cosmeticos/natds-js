import * as React from "react";

import MaterialPaper from "@material-ui/core/Paper";
import { IPaperProps } from "./Paper.props";

/**
 * For more advanced usages, check [Material UI Paper docs](https://material-ui.com/pt/components/paper/).
 */
export const Paper = React.forwardRef<unknown, IPaperProps>(
  (props: IPaperProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any,
  ) => <MaterialPaper {...props} ref={ref} />);

Paper.displayName = "Paper";

export default Paper;
