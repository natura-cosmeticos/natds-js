import React, { FunctionComponent, forwardRef } from "react";
import MaterialSnackbar, { SnackbarProps as ISnackbarProps } from "@material-ui/core/Snackbar";
import { withTheme} from "@material-ui/core/styles";

export { SnackbarProps as ISnackbarProps } from "@material-ui/core/Snackbar";

export const Snackbar: FunctionComponent<ISnackbarProps> = forwardRef((
  props: ISnackbarProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialSnackbar {...props} ref={ref} />);

Snackbar.displayName = "Snackbar";

export default withTheme(Snackbar);
