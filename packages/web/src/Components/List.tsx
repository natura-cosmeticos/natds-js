import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialList, { ListProps as IListProps } from "@material-ui/core/List";

export { ListProps as IListProps } from "@material-ui/core/List";

const List: FunctionComponent<IListProps> = forwardRef((
  props: IListProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialList {...props} ref={ref} />);

List.displayName = "List";

export default withTheme(List);
