import * as React from "react";
import MaterialList, { ListProps as IListProps } from "@material-ui/core/List";

/**
 * For more advanced usages, check [Material UI List docs](https://material-ui.com/components/lists/)
 *
 * ## Importing
 *
 * ```
 * import { List } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/lists/
 */
export const List = React.forwardRef<HTMLUListElement, IListProps>((
  props: IListProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialList {...props} ref={ref} />);

List.displayName = "List";

export default List;
