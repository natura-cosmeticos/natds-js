/* eslint-disable no-magic-numbers */
import { PaperProps } from "@material-ui/core";

export interface ICardProps
  extends Pick<PaperProps, "children" | "elevation" | "square"> {

  /**
   * The content of the component.
   *
   */
  children: PaperProps["children"];

  /**
   * Override or extend the styles applied to the component
   */
  className: PaperProps["className"];

  /**
   * If `true`, no elevation is used.
   *
   * @default 1
   * @optional
   * @type number
   */
  elevation?: PaperProps["elevation"];

  /**
   * If `true`, rounded corners are disabled.
   * @default false
   * @optional
   * @type boolean
   */
  square?: PaperProps["square"];
}
