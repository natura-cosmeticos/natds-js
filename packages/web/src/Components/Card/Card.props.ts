/* eslint-disable no-magic-numbers */
import { CardProps } from "@material-ui/core";

export interface ICardProps extends Pick<CardProps, "children" | "elevation" | "square"> {

  /**
   * The content of the component.
   *
   */
  children: CardProps["children"];

  /**
   * Override or extend the styles applied to the component
   */
  className?: CardProps["className"];

  /**
   * If `true`, no elevation is used.
   *
   * @default 1
   * @optional
   * @type number
   */
  elevation?: CardProps["elevation"];

  /**
   * If `true`, rounded corners are disabled.
   * @default false
   * @optional
   * @type boolean
   */
  square?: CardProps["square"];
}
