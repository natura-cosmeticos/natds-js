import { InputProps } from "@material-ui/core/Input";

export type Mask = Array<string | RegExp>;
export type MaskFn = () => Mask | void;
export type State = "error" | "success" | undefined;

type OmittedProps = "classes" | "inputComponent"

export interface IInputProps extends Omit<InputProps, OmittedProps> {

  /**
   * @optional
   * @type string
   */
  className?: InputProps["className"]

  /**
   * If `true`, the `input` or `textarea` element will be disabled.
   *
   * @optional
   * @type bool
   */
  disabled?: InputProps["disabled"]

  /**
   * If `true`, input will receive a padding-right equivalent to `large` spacing token
   *
   * @optional
   * @type bool
   */
  hasIcon?: boolean

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   *
   * @optional
   */
  inputComponent?: InputProps["inputComponent"]

  /**
   * Mask format. Based on [React Input Mask](https://github.com/sanniassin/react-input-mask)
   *
   * @optional
   * @see https://github.com/sanniassin/react-input-mask
   */
  mask?: Mask | MaskFn

  /**
   * If `true`, a textarea element will be rendered.
   *
   * @default false
   * @optional
   * @type bool
   */
  multiline?: InputProps["multiline"]

  /**
   * @optional
   * @type "error" | "success"
   */
  state?: State
}
