import { LinearProgressProps } from "@material-ui/core/LinearProgress";

/**
 * For more advanced usages, check [Material UI Progress docs](https://material-ui.com/pt/components/progress/)
 *
 * @see https://material-ui.com/pt/components/progress/
 */
export interface ILinearProgressProps extends Omit<LinearProgressProps, "translate"> {

  /**
   * Override or extend the styles applied to the component.
   *
   * See [Material Linear Progress CSS API](https://material-ui.com/api/linear-progress/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/linear-progress/#css
   * @type object
   */
  classes?: LinearProgressProps["classes"]

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   *
   * @default "primary"
   * @optional
   * @todo Check if we should include `inherit` color
   * @type "primary" | "secondary"
   */
  color?: LinearProgressProps["color"]

  /**
   * The value of the progress indicator for the `determinate` and `static` variants. Value between `0` and `100`.
   *
   * @optional
   * @type number
   */
  value?: LinearProgressProps["value"]

  /**
   * The value for the `buffer` variant. Value between `0` and `100`.
   *
   * @optional
   * @type number
   */
  valueBuffer?: LinearProgressProps["valueBuffer"]

  /**
   * The variant to use. Use `indeterminate` when there is no progress value.
   *
   * @default "indeterminate"
   * @optional
   * @type "determinate" | "indeterminate" | "buffer" | "query"
   */
  variant?: LinearProgressProps["variant"]
}
