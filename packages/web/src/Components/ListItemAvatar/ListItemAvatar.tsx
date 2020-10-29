import * as React from "react";
import MaterialListItemAvatar from "@material-ui/core/ListItemAvatar";
import { IListItemAvatarProps } from "./ListItemAvatar.props";

export { IListItemAvatarProps } from "./ListItemAvatar.props";

/**
 * ## Importing
 *
 * ```
 * import { ListItemAvatar } from "@naturacosmeticos/natds-web";
 * ```
 */
export const ListItemAvatar = React.forwardRef(
  (props: IListItemAvatarProps, ref) => {
    const { children, ...otherProps } = props;

    return <MaterialListItemAvatar {...otherProps} ref={ref}>{children}</MaterialListItemAvatar>;
  },
);

ListItemAvatar.displayName = "ListItemAvatar";
export default ListItemAvatar;
