import { CircularProgressProps } from "@material-ui/core/CircularProgress";

/**
 * Circular Progress props
 *
 * @see CircularProgress
 */
export interface ICircularProgressProps extends Omit<CircularProgressProps, "translate"> {

  /**
   * Override or extend the styles applied to the component.
   *
   * See [Material Circular Progress CSS API](https://material-ui.com/api/circular-progress/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/circular-progress/#css
   * @type object
   */
  classes?: CircularProgressProps["classes"]

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   *
   * @default "primary"
   * @optional
   * @type "primary" | "secondary" | "inherit"
   */
  color?: CircularProgressProps["color"]

  /**
   * If `true`, the shrink animation is disabled. This only works if variant is `indeterminate`.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableShrink?: CircularProgressProps["disableShrink"]

  /**
   * The size of the circle.
   *
   * If using a `number`, the pixel unit is assumed. If using a `string`, you need to provide the CSS unit, e.g `3rem`.
   *
   * @default 40
   * @example `<CircularProgress size={"3rem"} />`
   * @type number | string
   */
  size?: CircularProgressProps["size"]

  /**
   * The thickness of the circle.
   *
   * @default 3.6
   * @optional
   * @type number
   */
  thickness?: CircularProgressProps["thickness"]

  /**
   * The value of the progress indicator for the determinate and static variants. Value between 0 and 100.
   *
   * @default 0
   * @optional
   * @type number
   */
  value?: CircularProgressProps["value"]

  /**
   * The variant to use. Use `indeterminate` when there is no progress value.
   *
   * @default "indeterminate"
   * @type "indeterminate" | "determinate" | "static"
   */
  variant?: CircularProgressProps["variant"]
}
