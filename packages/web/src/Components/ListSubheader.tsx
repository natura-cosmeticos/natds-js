import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialListSubheader, {
  ListSubheaderProps as IListSubheaderProps,
} from "@material-ui/core/ListSubheader";

export { ListSubheaderProps as IListSubheaderProps } from "@material-ui/core/ListSubheader";

const ListSubheader: FunctionComponent<IListSubheaderProps> = forwardRef((
  props: IListSubheaderProps,
  ref: any,
) => <MaterialListSubheader {...props} ref={ref} />);

export default withTheme(ListSubheader);
