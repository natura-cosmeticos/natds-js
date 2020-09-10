import { ComponentType } from "react";
import { IThemeWeb } from "../../Themes";

export interface ITextFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;

  /**
   * The input id property
   */
  id: string;

  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;

  /**
   * @optional
   * Help text placed underneath the text TextField
   */
  label?: string;

  /**
   * @optional
   * Help text placed underneath the text TextField
   */
  helpText?: string;

  /**
   * @optional
   * If this field is required or not
   */
  required?: boolean;

  /**
   * @optional
   * Disables the TextField interaction
   */
  disabled?: boolean;

  /**
   * @optional
   * Optional state for component variant
   */
  state?: "error" | "success" | undefined;

  /**
   * @optional
   * The input type property
   */
  type: string;

  /**
   * @optional
   * Uses a textarea as input
   */
  multiline?: boolean;

  /**
   * @optional
   * Mask format. Based on https://github.com/sanniassin/react-input-mask
   */
  mask?: () => (void) | string[];

  /**
   * @optional
   * Icon component
   */
  icon?: ComponentType;

  /**
   * @optional
   * Icon component callback
   */
  onIconPress?: () => void;

  /**
   * @optional
   * Icon component to use with the Search field
   */
  searchIcon?: ComponentType;

  /**
   * @optional
   * Icon component to use with the Search field
   */
  showPasswordIcon?: ComponentType;

  /**
   * @optional
   * Icon component to use with the Search field
   */
  hidePasswordIcon?: ComponentType;
}
