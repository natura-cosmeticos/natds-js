import * as React from "react";
import { ListSubheaderProps } from "@material-ui/core/ListSubheader";

export interface IListSubheaderProps extends ListSubheaderProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: ListSubheaderProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * Check [CSS API](https://material-ui.com/api/list/#css) below for more details.
   *
   * @see https://material-ui.com/api/list/#css
   * @type object
   */
  classes?: ListSubheaderProps["classes"]

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   *
   * @default "default"
   * @optional
   * @type "default" | "primary" | "inherit"
   */
  color?: ListSubheaderProps["color"]

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   *
   * @default "li"
   * @optional
   * @type "li"
   */
  component?: React.ReactElement

  /**
   * If `true`, the `ListSubheader` will not have gutters.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableGutters?: ListSubheaderProps["disableGutters"]

  /**
   * If `true`, the `ListSubheader` will not stick to the top during scroll.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableSticky?: ListSubheaderProps["disableSticky"]

  /**
   * If `true`, the `ListSubheader` will be indented.
   *
   * @default false
   * @optional
   * @type bool
   */
  inset?: ListSubheaderProps["inset"]
}
