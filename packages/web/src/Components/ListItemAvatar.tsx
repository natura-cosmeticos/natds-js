import React, { FunctionComponent } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialListItemAvatar, {
  ListItemAvatarProps as IListItemAvatarProps,
} from "@material-ui/core/ListItemAvatar";

export { ListItemAvatarProps as IListItemAvatarProps } from "@material-ui/core/ListItemAvatar";

export const ListItemAvatar: FunctionComponent<IListItemAvatarProps> = (props: IListItemAvatarProps) => <MaterialListItemAvatar {...props} />;
export default withTheme(ListItemAvatar);
