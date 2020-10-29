import * as React from "react";
import { ListItemProps } from "@material-ui/core/ListItem";

export type IListItemProps = ListItemProps;

export interface OverriddenListItemProps extends ListItemProps {

  /**
   * Defines the align-items style property.
   *
   * @default "center"
   * @optional
   * @type "flex-start" | "center"
   */
  alignItems?: ListItemProps["alignItems"]

  /**
   * If `true`, the list item will be focused during the first mount.
   *
   * Focus will also be triggered if the value changes from `false` to `true`.
   *
   * @default false
   * @optional
   * @type bool
   */
  autoFocus?: ListItemProps["autoFocus"]

  /**
   * If `true`, the list item will be a button (using `ButtonBase`).
   *
   * Props intended for `ButtonBase` can then be applied to ListItem.
   *
   * @default false
   * @optional
   * @type bool
   */
  button?: ListItemProps["button"]

  /**
   * The content of the component. If a `ListItemSecondaryAction` is used it must be the last child.
   *
   * @optional
   * @type node
   */
  children?: ListItemProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [CSS API](https://material-ui.com/api/list/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/list/#css
   * @type object
   */
  classes?: ListItemProps["classes"]

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   *
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   *
   * @optional
   * @type element
   */
  component?: React.ReactElement

  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   *
   * @default "li"
   * @optional
   * @type element
   */
  ContainerComponent?: ListItemProps["ContainerComponent"]

  /**
   * Props applied to the container component if used.
   *
   * @default {}
   * @optional
   * @type object
   */
  ContainerProps?: ListItemProps["ContainerProps"]

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   *
   * @default false
   * @optional
   * @type bool
   */
  dense?: ListItemProps["dense"]

  /**
   * If `true`, the list item will be disabled.
   *
   * @default false
   * @optional
   * @type bool
   */
  disabled?: ListItemProps["disabled"]

  /**
   * If true, the horizontal padding (left and right) is removed.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableGutters?: ListItemProps["disableGutters"]

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   *
   * @default false
   * @optional
   * @type bool
   */
  divider?: ListItemProps["divider"]

  /**
   * Use to apply selected styling.
   *
   * @default false
   * @type bool
   */
  selected?: ListItemProps["selected"]
}
