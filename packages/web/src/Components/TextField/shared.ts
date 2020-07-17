import {IThemeWeb} from 'Themes';
import {ComponentType} from 'react';

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

/**
 * @todo Separate classes from `TextField/shared.ts` file
 */
// tslint:disable-next-line:max-classes-per-file
export interface IStateTypes {
  type: string;
  key: string;
  borderWidth: string;
}

export const stateStyles = {
  'default': {
    'borderWidth': '0 0 0 1px',
    'key': 'hint',
    'type': 'text'
  },
  'disabled': {
    'borderWidth': '0 0 0 1px',
    'key': 'hint',
    'type': 'text'
  },
  'error': {
    'borderWidth': '0 0 0 2px',
    'key': 'main',
    'type': 'error'
  },
  'filled': {
    'borderWidth': '0 0 0 1px',
    'key': 'primary',
    'type': 'text'
  },
  'focus': {
    'borderWidth': '0 0 0 2px',
    'key': 'main',
    'type': 'primary'
  },
  'hover': {
    'borderWidth': '0 0 0 1px',
    'key': 'secondary',
    'type': 'text'
  },
  'success': {
    'borderWidth': '0 0 0 1px',
    'key': 'main',
    'type': 'success'
  }
};

export const getProp = (namespace: string, type: string, key?: string) => ({theme}: { theme?: any }) => {
  const propNamespace = theme[namespace] || {},
    propType = propNamespace[type] || {};

  return key ? propType[key] : propType;
};

export const getColorByState = (initial: IStateTypes) => (props: ITextFieldProps) => {
  const {type, key} = getState(props, initial);

  return getProp('palette', type, key)(props);
};

export const getBorderByState = (initial: IStateTypes) => (props: ITextFieldProps) => {
  const {type, key, borderWidth} = getState(props, initial);

  return `${getProp('palette', type, key)(props)} ${borderWidth}`;
};

const getState = ({disabled, state}: Pick<ITextFieldProps, 'disabled' | 'state'>, initial: IStateTypes) => (disabled ? stateStyles.disabled : stateStyles[state || '']) || initial;
