import { BrandTypes } from '../../brandTypes/brandTypes'

export type SelectAccessibilityProps = {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-disabled'?: boolean;
  'aria-required'?: boolean;
  'aria-invalid'?: boolean;
  role?: string;
  tabIndex?: number;
};

export interface OptionProps {
  value: string
  label: string
}

export interface SelectProps {

  accessibility?: SelectAccessibilityProps;

  /**
   * Specify an optional className to be added to your Select
   */
  className?: string
  /**
   * Specify an optional brand to be added to your Select
   */
  brand?: BrandTypes

  /**
   * Optional ID for testing
   */
  testID?: string

  /**
   * Define text will be render before select element
   */
  label: string

  /**
   * Define name of select and is used to link label with element
   */
  name: string

  /**
   * First option selected and disabled only used for orientation
   */
  placeholder?: string

  /**
   * Array with all options to will render inside element
   */
  options: OptionProps[]

  /**
   * Define height of element
   */
  size?: 'medium' | 'mediumX'

  /**
   * Selected value of options
   */
  value: string

  /**
   * Auxiliary text will be render after element
   */
  helperText?: string

  /**
   * Define style of element, label and helper text
   */
  feedback?: 'success' | 'error'

  /**
   * Define if this field is required
   */
  required?: boolean

  /**
   * Define if this field is disabled
   */
  disabled?: boolean

  /**
   * The onChange event occurs when the value of an element has been changed.
   */
  onChange: React.ChangeEventHandler<HTMLSelectElement>

  /**
  * Use it in cases where a text label is not visible on the screen.
  */
 ariaLabel?: string

}
