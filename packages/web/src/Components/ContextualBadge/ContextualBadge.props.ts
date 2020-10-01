import * as React from "react";

export type IContextualBadgeColors = "primary" | "secondary" | "info" | "error" | "warning" | "success" | "light" | "dark";
export type IContextualBadgeTypes = "standard";

export interface IContextualBadgeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;

  /**
   * Classes to be used on the ContextualBadge
   *
   * @optional
   */
  classes?: string;

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
   * @type string
   */
  id: string;

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
