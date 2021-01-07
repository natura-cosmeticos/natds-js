import * as React from "react";

export type IRatingSizes = "small" | "standard" | "semi" | "semix";

export interface IRatingProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;

  /**
   * Forward CSS class name to `class` HTML attribute.
   *
   * @optional
   * @type string
   */
  className?: string;

  /**
   * The input id property
   *
   * @required
   * @type string
   */
  id?: string;

  /**
   * Style to be used on Rating
   */
  style?: React.CSSProperties;

  /**
   * Size of the `Rating`. Defaults to `"small"`.
   *
   * @optional
   */
  size?: IRatingSizes;

  /**
   * The rating value
   *
   * @optional
   */
  rate?: number;
}