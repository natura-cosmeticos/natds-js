import { BrandTypes } from '../../brandTypes/brandTypes'

export interface SwitchProps {
  /**
   * Specify an optional className to be added to your Switch
   */
  className?: string
  /**
   * Specify an optional className to be added to your Switch
   */
  brand?: BrandTypes

  /**
   * If `true`, the component is checked.
   * @default false
   */
  checked?: boolean

  /**
   * The string to use as the value of the switch when submitting the form,
   * if the switch is currently checked
   */
  value: string

  /**
   * Specify an id to distinguish different switches on the same page.
   * @default 'toggleSwitch'
   */
  id?: string

  /**
   * Callback fired when the state is changed.
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>

  /**
   * If `true`, the switch button will be disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Optional ID for testing
   */
  testID?: string
}
