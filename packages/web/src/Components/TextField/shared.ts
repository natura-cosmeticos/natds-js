import { IThemeWeb } from 'Themes';
import { ComponentType } from 'react';

export interface ITextFieldProps {
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
  state?: 'error' | 'success' | undefined;
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

export interface IStateTypes {
  type: string;
  key: string;
  borderWidth: string;
}

export const stateStyles = {
  default: { type: 'text', key: 'hint', borderWidth: '0 0 0 1px' },
  disabled: { type: 'text', key: 'hint', borderWidth: '0 0 0 1px' },
  hover: { type: 'text', key: 'secondary', borderWidth: '0 0 0 1px' },
  filled: { type: 'text', key: 'primary', borderWidth: '0 0 0 1px' },
  focus: { type: 'primary', key: 'main', borderWidth: '0 0 0 2px' },
  error: { type: 'error', key: 'main', borderWidth: '0 0 0 2px' },
  success: { type: 'success', key: 'main', borderWidth: '0 0 0 1px' },
};

export function getProp(namespace: string, type: string, key?: string) {
  return ({ theme }: { theme?: any }) => {
    const propNamespace = theme[namespace] || {};
    const propType = propNamespace[type] || {};

    return key ? propType[key] : propType;
  };
}

export function getColorByState(initial: IStateTypes) {
  return (props: ITextFieldProps) => {
    const { type, key } = getState(props, initial);

    return getProp('palette', type, key)(props);
  };
}

export function getBorderByState(initial: IStateTypes) {
  return (props: ITextFieldProps) => {
    const { type, key, borderWidth } = getState(props, initial);

    return `${getProp('palette', type, key)(props)} ${borderWidth}`;
  };
}

function getState({ disabled, state }: Pick<ITextFieldProps, 'disabled' | 'state'>, initial: IStateTypes) {
  return (disabled ? stateStyles.disabled : stateStyles[state || '']) || initial;
}
