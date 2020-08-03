import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialIconButton, {
  IconButtonProps as IIconButtonProps,
} from "@material-ui/core/IconButton";

export { IconButtonProps as IIconButtonProps } from "@material-ui/core/IconButton";

export const IconButton: FunctionComponent<IIconButtonProps> = forwardRef((
  props: IIconButtonProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialIconButton {...props} ref={ref} />);

IconButton.displayName = "IconButton";

export default withTheme(IconButton);
