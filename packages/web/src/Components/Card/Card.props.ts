/* eslint-disable no-magic-numbers */
import { PaperProps } from "@material-ui/core";

export interface ICardProps extends Omit<PaperProps, "component" | "variant"> {

  /**
   * The content of the component.
   *
   */
  children: PaperProps["children"];

  /**
   * Override or extend the styles applied to the component
   */
  className?: PaperProps["className"];

  /**
   * It accepts 0 or 1.
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
