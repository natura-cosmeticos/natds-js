import { CircularProgressProps } from "@material-ui/core/CircularProgress";

export interface IProgressIndicatorProps extends Pick<CircularProgressProps, "color" | "disableShrink" > {

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
   * If `true`, the shrink animation is disabled.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableShrink?: CircularProgressProps["disableShrink"];

  /**
   * The size of the circle.
   *
   * @default 48
   * @optional
   * @type 24 | 32 | 40 | 48
   */
  size?: CircularProgressProps["size"]
}
