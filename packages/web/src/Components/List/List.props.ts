import * as React from "react";
import { ListProps } from "@material-ui/core/List";

export interface IListProps extends ListProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: ListProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * Check [CSS API](https://material-ui.com/api/list/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/list/#css
   * @type object
   */
  classes?: ListProps["classes"]

  /**
   * @default "ul"
   * @optional
   * @type element
   */
  component?: React.ReactElement

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for the list and list items.
   *
   * The prop is available to descendant components as the dense context.
   *
   * @default false
   * @optional
   * @type bool
   */
  dense?: ListProps["dense"]

  /**
   * If `true`, vertical padding will be removed from the list.
   *
   * @default false
   * @optional
   * @type bool
   */
  disablePadding?: ListProps["disablePadding"]

  /**
   * The content of the subheader, normally `ListSubheader`.
   *
   * @optional
   * @see ListSubheader
   * @type node
   */
  subheader?: ListProps["subheader"]
}
