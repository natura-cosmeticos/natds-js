import * as React from "react";

export type IContextualBadgeColors = "primary" | "secondary" | "info" | "error" | "warning" | "success" | "light" | "dark";
export type IContextualBadgeTypes = "standard";

export interface IContextualBadgeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;

  /**
   * Class names to be used on the ContextualBadge (deprecated).
   *
   * Please use `className` property instead.
   *
   * @deprecated `classes` property as string is deprecated since 0.24.
   * Please use `className` instead. It will be removed at 1.0.
   * @optional
   * @type string
   */
  classes?: string;

  /**
   * Forward CSS class name to `class` HTML attribute.
   *
   * @optional
   * @type string
   */
  className?: string;

  /**
   * Elements to be placed inside the ContextualBadge
   */
  children?: React.ReactNode;

  /**
   * Color of the ContextualBadge to use from the theme. Defaults to \"primary\"
   *
   * @optional
   * @type 'primary' | 'secondary' | 'info' | 'error' | 'warning' | 'success' | 'light' | 'dark'
   */
  color?: IContextualBadgeColors;

  /**
   * The input id property
   *
   * @required
   * @type string
   */
  id?: string;

  /**
   * Style to be used on the ContextualBadge
   */
  style?: React.CSSProperties;

  /**
   * Type of the `ContextualBadge`. Defaults to `"standard"`.
   *
   * @optional
   */
  type?: IContextualBadgeTypes;

}
