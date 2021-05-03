import { IconName } from '@naturacosmeticos/natds-icons'
import { Size } from '@naturacosmeticos/natds-themes'

export type TextFieldSize = keyof Pick<Size, 'medium' | 'mediumX'>
export type TextFieldFeedback = 'success' | 'error'
export type TextFieldType = 'text' | 'password' | 'multiline'

export interface TextFieldProps {
  /**
   * If `true`, the field will be disabled and
   * the user will not be able to fill it.
   * @default false
   */
  disabled?: boolean;

  /**
   * Visual feedback used to show the user
   * if the value typed fit its validation rules or not
   */
  feedback?: TextFieldFeedback;

  /**
   * A helper text is used to provide hints or feedback to the user
   * about how to fill in the field. It is shown below the input.
   */
  helperText?: string;

  /**
   * A label needs to describe the purpose of the field.
   * It is shown above the input.
   */
  label: string;

  /**
   * Event handler
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * The placeholder text shown inside the field
   */
  placeholder?: string;

  /**
   * If `true`, the field will show its value and
   * the user will not be able to change or interact with it.
   * @default false
   */
  readOnly?: boolean;

  /**
   * It defines whether filling the field is required
   * for the user to move on to the next step or not.
   * @default false
   */
  required?: boolean;

  /**
   * The height of the field
   * @default mediumX
   */
  size?: TextFieldSize;

  /**
   *  Optional ID for testing
   */
  testID?: string;

  /**
   * The type of the field
   * @default text
   */
  type?: TextFieldType;

  /**
   * The current value of field
   */
  value?: string;

  /**
   *
   */
  action?: 'none' | 'icon' | 'image';

  /**
 * Set the icon to be rendered.
 * Check all available names in [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)
 * @default outlined-default-mockup
 */
  iconName?: IconName;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Use to define a text that explains the expected action
   */
  ariaLabel?: string

  /**
   *
   */
  src?: string;

  /**
   * An alternative description to image
   */
  alt?: string
}
