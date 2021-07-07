import { SelectProps } from '@material-ui/core/Select'
import { State } from 'Components/Input/Input.props'

export interface ISelectProps extends Pick<SelectProps, 'value' | 'onOpen' | 'onClose' | 'multiple' | 'defaultValue'> {
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
  options: Array<string | number>;

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
}
