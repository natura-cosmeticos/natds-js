import { ListItemTextProps } from "@material-ui/core/ListItemText";

export interface IListItemTextProps extends ListItemTextProps {

  /**
   * Alias for the primary property.
   *
   * @optional
   * @type node
   */
  children?: ListItemTextProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [CSS API](https://material-ui.com/api/list/#css) below for more details.
   *
   * @optional
   * @see https://material-ui.com/api/list/#css
   * @type object
   */
  classes?: ListItemTextProps["classes"]

  /**
   * If `true`, the children won't be wrapped by a `Typography` component.
   *
   * This can be useful to render an alternative `Typography` variant by wrapping the children (or primary) text,
   * and optional secondary text with the `Typography` component.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableTypography?: ListItemTextProps["disableTypography"]

  /**
   * If `true`, the children will be indented. This should be used if there is no left avatar or left icon.
   *
   * @default false
   * @optional
   * @type bool
   */
  inset?: ListItemTextProps["inset"]

  /**
   * The main content element.
   *
   * @optional
   * @type node
   */
  primary?: ListItemTextProps["primary"]

  /**
   * These props will be forwarded to the primary `Typography` component (as long as `disableTypography` is not `true`).
   *
   * @optional
   * @type object
   */
  primaryTypographyProps?: ListItemTextProps["primaryTypographyProps"]

  /**
   * The secondary content element.
   *
   * @optional
   * @type node
   */
  secondary?: ListItemTextProps["secondary"]

  /**
   * These props will be forwarded to the secondary `Typography` component (as long as `disableTypography` is not `true`).
   *
   * @optional
   * @type object
   */
  secondaryTypographyProps?: ListItemTextProps["secondaryTypographyProps"]
}
