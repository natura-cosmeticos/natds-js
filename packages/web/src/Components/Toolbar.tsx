import * as React from "react";
import * as MaterialToolbar from "@material-ui/core/Toolbar";
import { withTheme} from "@material-ui/core/styles";

export type IToolbarProps = MaterialToolbar.ToolbarProps;

export const Toolbar: React.FunctionComponent<IToolbarProps> = React.forwardRef((
  props: IToolbarProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialToolbar.default {...props} ref={ref} />);

Toolbar.displayName = "Toolbar";

export default withTheme(Toolbar);
