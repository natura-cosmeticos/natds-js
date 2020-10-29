import { RadioGroupProps } from "@material-ui/core/RadioGroup";

export interface IRadioGroupProps extends RadioGroupProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: RadioGroupProps["children"];

  /**
   * The default `input` element value. Use when the component is not controlled.
   *
   * @optional
   * @type Array<string> | number | string
   */
  defaultValue?: RadioGroupProps["defaultValue"];

  /**
   * The name used to reference the value of the control.
   *
   * If you don't provide this prop, it falls back to a randomly generated name.
   *
   * @optional
   * @type string
   */
  name?: RadioGroupProps["name"];

  /**
   * Callback fired when a radio button is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   *
   * @optional
   * @returns void
   * @type func
   */
  onChange?: RadioGroupProps["onChange"];

  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   *
   * @optional
   * @type any
   */
  value?: RadioGroupProps["value"];
}
