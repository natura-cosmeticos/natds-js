import React, { FunctionComponent, forwardRef } from "react";
import MaterialToolbar, { ToolbarProps as IToolbarProps } from "@material-ui/core/Toolbar";
import { withTheme} from "@material-ui/core/styles";

export { ToolbarProps as IToolbarProps } from "@material-ui/core/Toolbar";

export const Toolbar: FunctionComponent<IToolbarProps> = forwardRef((
  props: IToolbarProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialToolbar {...props} ref={ref} />);

Toolbar.displayName = "Toolbar";

export default withTheme(Toolbar);
