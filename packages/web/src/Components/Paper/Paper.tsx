import * as React from "react";

import MaterialPaper from "@material-ui/core/Paper";
import { IPaperProps } from "./Paper.props";

/**
 * For more advanced usages, check [Material UI Paper docs](https://material-ui.com/pt/components/paper/).
 */
export const Paper = React.forwardRef<HTMLElement, IPaperProps>(
  (props: IPaperProps, ref) => <MaterialPaper {...props} ref={ref} />);

Paper.displayName = "Paper";

export default Paper;
