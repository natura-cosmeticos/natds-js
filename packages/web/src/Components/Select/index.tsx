import * as React from "react";
import { withTheme } from "@material-ui/styles";
import MaterialSelect, {
  SelectProps as ISelectProps,
} from "@material-ui/core/Select";

export const Select: React.FunctionComponent<Omit<
  ISelectProps,
  "translate"
  >> = React.forwardRef((props: Omit<ISelectProps, "translate">,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any) => (
    <MaterialSelect {...props} ref={ref} />
  ));

Select.displayName = "Select";

export default withTheme(Select);
