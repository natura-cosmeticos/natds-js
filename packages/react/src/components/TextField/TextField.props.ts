import { Size } from '@naturacosmeticos/natds-themes'

export type TextFieldSize = keyof Pick<Size, 'medium' | 'mediumX'>
export type TextFieldFeedback = 'success' | 'error'

export interface TextFieldProps {
  /**
   * It shows an actionable button inside the field, on its right end.
   * @default none
   */
  action?: 'none' | 'icon' | 'image';

  /**
   * If `true`, the field will be disabled and the user will not be able to fill it.
   * @default false
   */
  disabled?: boolean;

  /**
  * Visual feedback used to show the user if the value typed fit its validation rules or not
  */
  feedback?: TextFieldFeedback;

  /**
   * Event handler
   */
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  /**
  * A helper text is used to provide hints or feedback
  * to the user about how to fill in the field. It is shown below the input.
  */
  helperText?: string;

  /**
   * A Label needs to describe the purpose of the field. It is shown above the input.
   */
  label: string;

  /**
   * The placeholder text shown inside the field
  */
  placeholder?: string;

  /**
  * If `true`, the field will show its value, while being disabled
  * and the user will not be able to change or interact with it.
  * @default false
  */
  readOnly?: boolean;

  /**
  * It defines whether filling the field is required for the user
  * to move on to the next step or not.
  * @default false
  */
  required?: boolean;

  /**
  * The height of the field
  * @default mediumX
  */
  size?: TextFieldSize;

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * The type of the field
   * @default text
   */
  type?: 'text' | 'password' | 'multiline';

  /**
   * The current value of Text Field
   */
  value?: string
}
