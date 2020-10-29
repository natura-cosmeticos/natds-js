import { ListItemAvatarProps } from "@material-ui/core/ListItemAvatar";

export interface IListItemAvatarProps extends ListItemAvatarProps {

  /**
   * The content of the component – normally `Avatar`.
   *
   * @required
   * @see Avatar
   * @type element
   */
  children: ListItemAvatarProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [CSS API](https://material-ui.com/api/list/#css) below for more details.
   *
   * @see https://material-ui.com/api/list/#css
   * @type object
   */
  classes?: ListItemAvatarProps["classes"]
}
