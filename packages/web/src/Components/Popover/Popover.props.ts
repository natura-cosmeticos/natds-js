import { PopperProps } from "@material-ui/core/Popper/Popper";
import * as React from "react";
import { PopperPlacementType } from "@material-ui/core";
import { IActionLinkProps } from "./ActionLink";

export interface IPopoverProps extends Omit<PopperProps, "placement"> {

  /**
   * @optional
   * @type IActionLinkProps
   */
  actionLink?: IActionLinkProps;

  /**
   * This is the reference element, or a function that returns the reference element
   *
   * It may be used to set the position of the popover.
   *
   * Its value should be an HTML element instance or a referenceObject.
   *
   * @optional
   * @type object | func
   */
  anchorEl?: PopperProps["anchorEl"],

  /**
   * Popper render function or node.
   *
   * @required
   * @type node | func
   */
  children: PopperProps["children"],

  /**
   * @optional
   * @type element
   */
  component?: React.ElementType;

  /**
   * A node, component instance, or function that returns either.
   *
   * @optional
   * @type object | func
   */
  container?: PopperProps["container"];

  /**
   * @optional
   * @type PopperPlacementType
   */
  direction?: PopperPlacementType;

  /**
   * Disable the portal behavior. The children stay within it's parent DOM hierarchy.
   *
   * @default false
   * @optional
   * @type bool
   */
  disablePortal?: PopperProps["disablePortal"];

  /**
   * Always keep the children in the DOM.
   *
   * This prop can be useful in SEO situation or when you want to maximize the responsiveness of the `Popper`.
   *
   * @default false
   * @optional
   * @type bool
   */
  keepMounted?: PopperProps["keepMounted"];

  /**
   * @optional
   * @todo Add support to size tokens
   * @type number
   */
  maxWidth?: number;

  /**
   * If `true`, the `Popover` is visible.
   *
   * @required
   * @type bool
   */
  open: PopperProps["open"]

  /**
   * Popper placement.
   *
   * @default "bottom"
   * @optional
   * @type "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"
   */
  placement?: PopperProps["placement"]

  /**
   * Options provided to the `Popover` positioning engine.
   *
   * @default {}
   * @optional
   * @see https://popper.js.org/
   * @type object
   */
  popperOptions?: PopperProps["popperOptions"]

  /**
   * A ref that points to the used popper instance.
   *
   * @optional
   * @type ref
   */
  popperRef?: PopperProps["popperRef"]

  /**
   * Help supporting a `react-transition-group` / `Transition` component.
   *
   * @default false
   * @optional
   * @see https://reactcommunity.org/react-transition-group/
   * @type bool
   */
  transition?: PopperProps["transition"]
}
