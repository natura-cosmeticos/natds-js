import { ListItemSecondaryActionProps } from "@material-ui/core/ListItemSecondaryAction";

export interface IListItemSecondaryActionProps extends ListItemSecondaryActionProps {

  /**
   * The content of the component, normally an IconButton or selection control.
   *
   * @optional
   * @type element
   */
  children?: ListItemSecondaryActionProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * Check [CSS API](https://material-ui.com/api/list/#css) below for more details.
   *
   * @optional
   * @see https://material-ui.com/api/list/#css
   * @type object
   */
  classes?: ListItemSecondaryActionProps["classes"]
}
