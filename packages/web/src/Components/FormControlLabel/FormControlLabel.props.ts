import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";

export interface IFormControlLabelProps extends FormControlLabelProps {

  /**
   * If `true`, the component appears selected.
   *
   * @optional
   * @type bool
   */
  checked?: FormControlLabelProps["checked"]

  /**
   * Override or extend the styles applied to the component.
   *
   * Check [CSS API](https://material-ui.com/pt/api/form-control-label/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/pt/api/form-control-label/#css
   * @type object
   */
  classes?: FormControlLabelProps["classes"]

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   *
   * @required
   * @type element
   */
  control: FormControlLabelProps["control"]

  /**
   * If `true`, the control will be disabled.
   *
   * @optional
   * @type bool
   */
  disabled?: FormControlLabelProps["disabled"]

  /**
   * Pass a ref to the input element.
   *
   * @optional
   * @type ref
   */
  inputRef?: FormControlLabelProps["inputRef"]

  /**
   * The text to be used in an enclosing label element.
   *
   * @optional
   * @required
   * @type node
   */
  label: FormControlLabelProps["label"]

  /**
   * The position of the label.
   *
   * @default "end"
   * @optional
   * @type "bottom" | "end" | "start" | "top"
   */
  labelPlacement?: FormControlLabelProps["labelPlacement"]

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   *
   * @returns void
   * @type func
   */
  onChange?: FormControlLabelProps["onChange"]

  /**
   * The value of the component
   *
   * @optional
   * @type any
   */
  value?: FormControlLabelProps["value"]
}
