import { RadioProps } from "@material-ui/core/Radio";

export interface IRadioProps extends Omit<RadioProps, "translate"> {

  /**
   * If `true`, the component is checked.
   *
   * @optional
   * @type bool
   */
  checked?: RadioProps["checked"]

  /**
   * The icon to display when the component is checked.
   *
   * @optional
   * @type node
   */
  checkedIcon?: RadioProps["checkedIcon"]

  /**
   * Override or extend the styles applied to the component.
   *
   * Check [CSS API](https://material-ui.com/pt/api/switch/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/pt/api/switch/#css
   * @type object
   */
  classes?: RadioProps["classes"]

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   *
   * @default "secondary"
   * @optional
   * @type "primary" | "secondary" | "default"
   */
  color?: RadioProps["color"]

  /**
   * If `true`, the radio will be disabled.
   *
   * @default false
   * @optional
   * @type bool
   */
  disabled?: RadioProps["disabled"]

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * @optional
   * @type bool
   */
  disableRipple?: RadioProps["disableRipple"]

  /**
   * The icon to display when the component is unchecked.
   *
   * @optional
   * @type node
   */
  icon?: RadioProps["icon"]

  /**
   * The `id` of the `input` element.
   *
   * @optional
   * @type string
   */
  id?: RadioProps["id"]

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the input element.
   *
   * @optional
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes
   * @type object
   */
  inputProps?: RadioProps["inputProps"]

  /**
   * Pass a `ref` to the `input` element.
   *
   * @optional
   * @type ref
   */
  inputRef?: RadioProps["inputRef"]

  /**
   * Name attribute of the `input` element.
   *
   * @optional
   * @type string
   */
  name?: RadioProps["name"]

  /**
   * Callback fired when the state is changed i.e `function(event: object) => void`
   *
   * @param {object} event
   * @return {void}
   *
   * @optional
   * @type func
   */
  onChange?: RadioProps["onChange"]

  /**
   * If true, the input element will be required.
   *
   * @optional
   * @type bool
   */
  required?: RadioProps["required"]

  /**
   * The size of the radio. `small` is equivalent to the dense radio styling.
   *
   * @optional
   * @type "small" | "medium"
   */
  size?: RadioProps["size"]

  /**
   * The value of the component. The DOM API casts this to a `string`.
   *
   * @optional
   * @type any
   */
  value?: RadioProps["value"]
}
