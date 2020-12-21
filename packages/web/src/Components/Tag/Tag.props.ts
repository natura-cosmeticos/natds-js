import * as React from "react";

export type ITagColors = "primary" | "secondary" | "info" | "error" | "warning" | "success" | "light" | "dark";
export type ITagSizes = "small" | "standard";
export type ITagPositions = "default" | "left";

export interface ITagProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;

  /**
   * Class names to be used on the Tag (deprecated).
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
   * Elements to be placed inside the Tag
   */
  children?: React.ReactNode;

  /**
   * Color of the Tag to use from the theme. Defaults to \"primary\"
   *
   * @optional
   * @type 'primary' | 'secondary' | 'info' | 'error' | 'warning' | 'success' | 'light' | 'dark'
   */
  color?: ITagColors;

  /**
   * The input id property
   *
   * @required
   * @type string
   */
  id?: string;

  /**
   * Style to be used on Tag
   */
  style?: React.CSSProperties;

  /**
   * Size of the `Tag`. Defaults to `"small"`.
   *
   * @optional
   */
  size?: ITagSizes;

  /**
   * Position of the `Tag`. Defaults to `"default"`.
   *
   * @optional
   */
  position?: ITagPositions;
}
