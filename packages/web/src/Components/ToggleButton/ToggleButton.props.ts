import * as React from "react";
import { IIconButtonProps } from "../IconButton";

/**
 * ToggleButton extends IconButton.
 *
 * For more details check the full [Material UI IconButton API](https://material-ui.com/api/icon-button/)
 *
 * @see IconButton
 */
export interface IToggleButtonProps extends Omit<IIconButtonProps, "children" | "onClick" | "translate"> {

  /**
   * Defines the initial state. Can be changed.
   *
   * @default false
   * @optional
   * @type bool
   */
  checked?: boolean;

  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   *
   * @optional
   * @todo Add CSS API link
   * @type object
   */
  classes?: IIconButtonProps["classes"];

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   *
   * @default "default"
   * @optional
   * @type "default" | "inherit" | "primary" | "secondary"
   */
  color?: IIconButtonProps["color"];

  /**
   * If true, the `ToggleButton` will be disabled.
   *
   * @default false
   * @optional
   * @type bool
   */
  disabled?: IIconButtonProps["disabled"];

  /**
   * If `true`, the keyboard focus ripple will be disabled. `disableRipple` must also be `true`.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableFocusRipple?: IIconButtonProps["disableFocusRipple"];

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for `:focus-visible` by default.
   * Be sure to highlight the element by applying separate styles with the `focusVisibleClassName`.
   *
   * @optional
   * @type bool
   */
  disableRipple?: IIconButtonProps["disableRipple"];

  /**
   * If given, uses a negative margin to counteract the padding on one side.
   *
   * This is often helpful for aligning the left or right side of the icon with content above or below,
   * without ruining the border size and shape.
   *
   * @default false
   * @optional
   * @type "start" | "end" | false
   */
  edge?: IIconButtonProps["edge"];

  /**
   * Icon component when not checked (when state is *off*)
   *
   * @required
   * @type node
   */
  iconOff: React.ReactNode;

  /**
   * Icon component when checked (when state is *on*)
   *
   * @required
   * @type node
   */
  iconOn: React.ReactNode;

  /**
   * Click callback, returns the original click event and the current state
   *
   * @optional
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event The click event
   * @param {boolean} state Current state
   * @returns void
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, state: boolean) => void;

  /**
   * The size of the `ToggleButton`. `small` is equivalent to the dense `IconButton` styling.
   *
   * @default "medium"
   * @optional
   * @type "small" | "medium"
   */
  size?: IIconButtonProps["size"];
}
