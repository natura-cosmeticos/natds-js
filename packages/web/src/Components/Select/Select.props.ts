import { State } from 'Components/Input/Input.props';

export interface SelectProps {
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
   * Options of Select
   */
  options: string[];

  /**
   * @optional
   */
  placeholder: string;

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

export type ISelectProps = SelectProps;
