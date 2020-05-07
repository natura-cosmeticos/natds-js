import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import Icon from './Icon';
import {
  KeyboardDatePicker as MaterialKeyboardDatePicker,
  KeyboardDatePickerProps as DatePickerViewsProps,
} from '@material-ui/pickers/DatePicker';
import InputStateHelpTextProvider, { IInputStateHelpTextProviderProps } from './InputStateHelpTextProvider';

type DatePickerViewsWithoutKeyboardIconAndHelperTextProps = Omit<
  DatePickerViewsProps,
  'keyboardIcon' | 'helperText'
>;

export type IKeyboardDatePickerViewsProps = DatePickerViewsWithoutKeyboardIconAndHelperTextProps &
  IInputStateHelpTextProviderProps;

type KeyboardDatePickerViewsPropsWithoutTheme = Omit<
  IKeyboardDatePickerViewsProps,
  'theme'
>;

const getStateClassName = (props: IKeyboardDatePickerViewsProps) => {
  const { state, disabled, value } = props;
  if (!disabled) {
    if (state === 'error') {
      return 'MuiError';
    }
    if (state === 'success') {
      return 'MuiSuccess';
    }
    if (value) {
      return 'MuiFilled';
    }
  }
  return '';
};

export const KeyboardDatePicker: FunctionComponent<KeyboardDatePickerViewsPropsWithoutTheme> = forwardRef(
  (props: IKeyboardDatePickerViewsProps, ref: any) => {
    const stateClassName = { className: getStateClassName(props) };

    const {
      label,
      helpText,
      state,
      children,
      ...keyboardDatePickerProps
    } = props;

    const keyboardDatePickerComponent = <MaterialKeyboardDatePicker
      disableToolbar={props.variant === 'inline'}
      {...keyboardDatePickerProps}
      required={false}
      keyboardIcon={<Icon name="outlined-action-calendar" size="tiny" />}
      ref={ref}
      InputProps={stateClassName}
      label=""
      helperText=""
    />;

    if (props.variant === 'static') {
      return keyboardDatePickerComponent;
    }
    return (
      <InputStateHelpTextProvider {...props}>
        {keyboardDatePickerComponent}
      </InputStateHelpTextProvider>
    );
  }
);

export default withTheme(KeyboardDatePicker);
