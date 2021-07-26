import { SelectProps } from '@material-ui/core/Select'
import { State } from 'Components/Input/Input.props'

export type DeprecatedOptions = string | number
export type UpdatedOptions = { value: string | number; description: string| number }

/**
 * @deprecated
 */
type DeprecatedSelectOptions = Array<DeprecatedOptions>;
type UpdatedSelectOptions = Array<UpdatedOptions>;

export type SelectOptions = DeprecatedSelectOptions | UpdatedSelectOptions;

export interface ISelectProps {
  /**
   * @optional
   * Disables the Select interaction
   */
  disabled?: boolean;

  /**
   * @optional
   * Help text placed underneath the Select
   */
  helpText?: string;

  /**
   * The Select id property
   */
  id?: string;

  /**
   * @optional
   * Help text placed underneath the Select
   */
  label?: string;

  /**
   * Execute a callback when user change the selected option.
   *
   * @type Function
   */
  onChange: SelectProps['onChange']

  /**
   * Options of Select
   */
  options: SelectOptions;

  /**
   * @optional
   */
  placeholder?: string;

  /**
   * @optional
   * If this Select is required or not
   */
  required?: boolean;

  /**
   * @optional
   * Optional state for component variant
   */
  state?: State;

  /**
   * The input value. Providing an empty string will select no options.
   *
   */
  value?: SelectProps['value']

  /**
   * Callback fired when the component requests to be opened.
   */
  onOpen?: SelectProps['onOpen']

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: SelectProps['onClose']

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue?: SelectProps['defaultValue']
}
