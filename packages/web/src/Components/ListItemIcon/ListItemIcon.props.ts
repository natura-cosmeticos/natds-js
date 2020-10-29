import { ListItemIconProps } from "@material-ui/core/ListItemIcon";

export interface IListItemIconProps extends ListItemIconProps {

  /**
   * The content of the component, like `Icon`, `SvgIcon`, or a `natds-icons` SVG icon element.
   *
   * @optional
   * @see Icon
   * @type element
   */
  children?: ListItemIconProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [CSS API](https://material-ui.com/api/list/#css) below for more details.
   *
   * @optional
   * @see https://material-ui.com/api/list/#css
   * @type object
   */
  classes?: ListItemIconProps["classes"]

}
