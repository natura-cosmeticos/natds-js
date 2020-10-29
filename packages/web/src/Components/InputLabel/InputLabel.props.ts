import { InputLabelProps } from "@material-ui/core/InputLabel";
import { State } from "../Input/Input.props";

export interface IInputLabelProps extends Omit<InputLabelProps, "shrink"> {

  /**
   * The contents of the `InputLabel`.
   *
   * @optional
   * @type node
   */
  children?: InputLabelProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [CSS API](https://material-ui.com/pt/api/input-label/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/pt/api/input-label/#css
   * @type object
   */
  classes?: InputLabelProps["classes"]

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   *
   * @optional
   * @type "primary" | "secondary"
   */
  color?: InputLabelProps["color"]

  /**
   * If `true`, the transition animation is disabled.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableAnimation?: InputLabelProps["disableAnimation"]

  /**
   * If `true`, apply disabled class.
   *
   * @optional
   * @type bool
   */
  disabled?: InputLabelProps["disabled"]

  /**
   * If `true`, the label will be displayed in an error state.
   *
   * @optional
   * @type bool
   */
  error?: InputLabelProps["error"]

  /**
   * If `true`, the input of this label is focused.
   *
   * @optional
   * @type bool
   */
  focused?: InputLabelProps["focused"]

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from `FormControl`.
   *
   * @optional
   * @type "dense"
   */
  margin?: InputLabelProps["margin"]

  /**
   * if `true`, the label will indicate that the input is required.
   *
   * @optional
   * @type bool
   */
  required?: InputLabelProps["required"]

  /**
   * @optional
   * @type "error" | "success" | undefined
   */
  state?: State

  /**
   * The variant to use.
   *
   * @optional
   * @type "filled" | "outlined" | "standard"
   */
  variant?: InputLabelProps["variant"]
}
