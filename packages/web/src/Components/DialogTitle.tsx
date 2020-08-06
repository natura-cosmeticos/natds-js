import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialDialogTitle, {
  DialogTitleProps as IDialogTitleProps,
} from "@material-ui/core/DialogTitle";

export {
  DialogTitleProps as IDialogTitleProps,
} from "@material-ui/core/DialogTitle";

export const DialogTitle: FunctionComponent<IDialogTitleProps> = forwardRef((
  props: IDialogTitleProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialDialogTitle {...props} ref={ref} />);

DialogTitle.displayName = "DialogTitle";

export default withTheme(DialogTitle);
