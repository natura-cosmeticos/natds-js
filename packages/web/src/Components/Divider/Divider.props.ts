import { DividerProps } from "@material-ui/core/Divider";
import React from "react";

export interface IDividerProps extends Omit<DividerProps, "translate"> {

  /**
   * Absolutely position the element.
   *
   * @default false
   * @optional
   * @type bool
   */
  absolute?: DividerProps["absolute"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [CSS API](https://material-ui.com/pt/api/switch/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/pt/api/switch/#css
   * @type object
   */
  classes?: DividerProps["classes"]

  /**
   * The component used for the root node. Either a `string` to use a DOM element or a component.
   *
   * @default "hr"
   * @optional
   * @type element
   */
  component?: React.ReactElement

  /**
   * If `true`, the divider will have a lighter color.
   *
   * @default false
   * @optional
   * @type bool
   */
  light?: DividerProps["light"]

  /**
   * The divider orientation.
   *
   * @default "horizontal"
   * @optional
   * @type "horizontal" | "vertical"
   */
  orientation?: DividerProps["orientation"]

  /**
   * The variant to use.
   *
   * @default "fullWidth"
   * @type "fullWidth" | "inset" | "middle"
   */
  variant?: DividerProps["variant"]
}
