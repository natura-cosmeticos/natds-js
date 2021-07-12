import * as React from 'react'
import { StandardTextFieldProps } from '@material-ui/core'
import { ISearchClearProps } from 'Components/Field/SearchClear'
import { IInputStateHelpTextProviderProps } from '../InputStateHelpTextProvider'
import { IThemeWeb } from '../../Themes'
import { Mask, MaskFn, State } from '../Input/Input.props'

export type Type = 'password' | 'search' | 'text' | React.InputHTMLAttributes<HTMLInputElement>['type'];

export interface TextFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;

  /**
   * @optional
   * Disables the TextField interaction
   */
  disabled?: boolean;

  /**
   * @optional
   * Help text placed underneath the text TextField
   */
  helpText?: string;

  /**
   * @optional
   * Icon component to use with the Search field
   */
  hidePasswordIcon?: React.ComponentType;

  /**
   * @optional
   * Icon component
   */
  icon?: React.Component | JSX.Element;

  /**
   * The input id property
   */
  id: string;

  /**
   * @optional
   * Help text placed underneath the text TextField
   */
  label?: string;

  /**
   * Mask format. Based on [React Input Mask](https://github.com/sanniassin/react-input-mask)
   *
   * @optional
   * @see https://github.com/sanniassin/react-input-mask
   */
  mask?: Mask | MaskFn;

  /**
   * @optional
   * Uses a textarea as input
   */
  multiline?: boolean;

  /**
   * @optional
   * Icon component callback
   */
  onIconPress?: () => void;

  /**
   * @optional
   * If this field is required or not
   */
  required?: boolean;

  /**
   * @optional
   * Icon component to use with the Search field
   */
  searchIcon?: React.ComponentType;

  /**
   * @optional
   * Icon component to use with the Search field
   */
  showPasswordIcon?: React.ComponentType;

  /**
   * @optional
   * Optional state for component variant
   */
  state?: State;

  /**
   * @deprecated `theme` property is deprecated since version `0.22`
   * Please wrap your application with `<Provider />` and theme will be applied to all `TextField` components.
   *
   * @todo remove theme property
   */
  theme?: IThemeWeb | unknown;

  /**
   * The input type property
   *
   * @default "text"
   * @optional
   * @type "password" | "search" | "text" | string
   */
  type?: Type;

  /**
   * Event to clear input field on 'search' type
   */
  onClearSearch?: ISearchClearProps['onClearSearch']

  /**
  * Callback fired when the input is blurred.
   */
  onBlur?: StandardTextFieldProps['onBlur'];

  /**
   * Callback fired when the value is changed.
   */
  onChange?: StandardTextFieldProps['onChange'];

  /**
   * Callback fired when the value is focused.
   */
  onFocus?: StandardTextFieldProps['onFocus'];

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: StandardTextFieldProps['value'];

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder?: StandardTextFieldProps['placeholder']

}

export type ITextFieldProps = TextFieldProps & IInputStateHelpTextProviderProps;
