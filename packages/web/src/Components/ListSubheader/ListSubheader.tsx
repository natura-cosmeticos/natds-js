import * as React from "react";
import MaterialListSubheader from "@material-ui/core/ListSubheader";
import { IListSubheaderProps } from "./ListSubheader.props";

export { IListSubheaderProps } from "./ListSubheader.props";

/**
 * ## Importing
 *
 * ```
 * import { ListSubheader } from "@naturacosmeticos/natds-web";
 * ```
 */
export const ListSubheader = React.forwardRef<HTMLLIElement, IListSubheaderProps>((
  props: IListSubheaderProps, ref,
) => <MaterialListSubheader {...props} ref={ref} />);

ListSubheader.displayName = "ListSubheader";

export default ListSubheader;
