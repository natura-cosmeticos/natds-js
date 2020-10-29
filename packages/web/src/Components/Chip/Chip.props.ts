import * as React from "react";
import { ChipProps } from "@material-ui/core/Chip";

/**
 * `children` prop isn't supported. Use the component prop if you need to change the children structure.
 */
export interface IChipProps extends Omit<ChipProps, "children"> {

  /**
   * `Avatar` element.
   *
   * @optional
   * @type element
   */
  avatar?: ChipProps["avatar"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [Material Chip CSS API](https://material-ui.com/api/chip/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/chip/#css
   * @type object
   */
  classes?: ChipProps["classes"]

  /**
   * If `true`, the chip will appear clickable, and will raise when pressed, even if the `onClick` prop is not defined.
   *
   * If `false`, the chip will not be clickable, even if `onClick` prop is defined.
   * This can be used, for example, along with the `component` prop to indicate an anchor `Chip` is clickable.
   *
   * @optional
   * @type bool
   */
  clickable?: ChipProps["clickable"]

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   *
   * @default "default"
   * @optional
   * @type "default" | "primary" | "secondary"
   */
  color?: ChipProps["color"]

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   *
   * @default "div"
   * @optional
   * @type element
   */
  component?: React.ReactElement

  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   *
   * @optional
   * @type element
   */
  deleteIcon?: ChipProps["deleteIcon"]

  /**
   * If `true`, the chip should be displayed in a disabled state.
   *
   * @default false
   * @optional
   * @type bool
   */
  disabled?: ChipProps["disabled"]

  /**
   * `Icon` element.
   *
   * @optional
   * @type element
   */
  icon?: ChipProps["icon"]

  /**
   * The content of the label.
   *
   * @optional
   * @type node
   */
  label?: ChipProps["label"]

  /**
   * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
   *
   * @optional
   * @type func
   */
  onDelete?: ChipProps["onDelete"]

  /**
   * The size of the chip.
   *
   * @default "medium"
   * @optional
   * @type "small" | "medium"
   */
  size?: ChipProps["size"]

  /**
   * The variant to use.
   *
   * @default "default"
   * @type "default" | "outlined"
   */
  variant?: ChipProps["variant"]

}
