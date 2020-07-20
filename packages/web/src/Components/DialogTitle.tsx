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
  ref: any,
) => <MaterialDialogTitle {...props} ref={ref} />);

export default withTheme(DialogTitle);
