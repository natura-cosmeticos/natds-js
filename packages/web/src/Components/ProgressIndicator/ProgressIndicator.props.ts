import { CircularProgressProps } from "@material-ui/core/CircularProgress";

export interface IProgressIndicatorProps extends Pick<CircularProgressProps, "color" > {

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  className?: CircularProgressProps["className"];

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   *
   * @default "primary"
   * @optional
   * @type "primary" | "secondary" | "inherit"
   */
  color?: CircularProgressProps["color"];

  /**
   * The size of the circle.
   *
   * @default 48
   * @optional
   * @values 24 | 32 | 48 | 64
   * @type number
   */
  size?: CircularProgressProps["size"]
}
