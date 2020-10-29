import { SwitchProps } from "@material-ui/core/Switch";

export interface ISwitchProps extends Omit<SwitchProps, "translate"> {

  /**
   * If `true`, the component is checked.
   *
   * @optional
   * @type bool
   */
  checked?: SwitchProps["checked"]

  /**
   * The icon to display when the component is checked.
   *
   * @optional
   * @type node
   */
  checkedIcon?: SwitchProps["checkedIcon"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [CSS API](https://material-ui.com/pt/api/switch/#css) for more details.
   *
   * @optional
   * @type object
   */
  classes?: SwitchProps["classes"]

  /**
   * The color of the component.
   *
   * It supports those theme colors that make sense for this component.
   * Defaults to `secondary`
   *
   * @optional
   * @type "primary" | "secondary" | "default"
   */
  color?: SwitchProps["color"]

  /**
   * If `true`, the switch will be disabled. Defaults to `false`.
   *
   * @optional
   * @type bool
   */
  disabled?: SwitchProps["disabled"]

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * @optional
   * @type bool
   */
  disableRipple?: SwitchProps["disableRipple"]

  /**
   * If given, uses a negative margin to counteract the padding on one side.
   *
   * This is often helpful for aligning the left or right side of the icon
   * with content above or below, without ruining the border size and shape.
   *
   * @optional
   * @type "start" | "end" | false
   */
  edge?: SwitchProps["edge"]

  /**
   * The icon to display when the component is unchecked.
   *
   * @optional
   * @type node
   */
  icon?: SwitchProps["icon"]

  /**
   * The `id` of the `input` element.
   *
   * @optional
   * @type string
   */
  id?: SwitchProps["id"]

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes
   * @type object
   */
  inputProps?: SwitchProps["inputProps"]

  /**
   * Pass a `ref` to the `input` element.
   *
   * @optional
   * @type ref
   */
  inputRef?: SwitchProps["inputRef"]

  /**
   * Callback fired when the state is changed i.e `function(event: object) => void`
   *
   * @optional
   * @type func
   */
  onChange?: SwitchProps["onChange"]

  /**
   * If `true`, the `input` element will be required.
   *
   * @optional
   * @type bool
   */
  required?: SwitchProps["required"]

  /**
   * The size of the switch. `small` is equivalent to the dense switch styling.
   *
   * @optional
   * @type "small" | "medium
   */
  size?: SwitchProps["size"]

  /**
   * The `input` component prop type.
   *
   * @optional
   * @type string
   */
  type?: SwitchProps["type"]

  /**
   * The `value` of the component. The DOM API casts this to a `string`.
   *
   * @optional
   * @type any
   */
  value?: SwitchProps["value"]

}
