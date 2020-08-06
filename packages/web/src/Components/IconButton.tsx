import * as React from "react";
import { withTheme } from "@material-ui/styles";
import * as MaterialIconButton from "@material-ui/core/IconButton";

export type IIconButtonProps = MaterialIconButton.IconButtonProps;

export const IconButton: React.FunctionComponent<IIconButtonProps> = React.forwardRef((
  props: IIconButtonProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialIconButton.default {...props} ref={ref} />);

IconButton.displayName = "IconButton";

export default withTheme(IconButton);
