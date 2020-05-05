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

const getStateStyleFromTheme = (props: IKeyboardDatePickerViewsProps) => {
  const { state, theme, disabled } = props;
  if (!disabled && theme && theme.palette) {
    if (state === 'error' && theme.palette.error) {
      return { style: { boxShadow: `${theme.palette.error.main} 0 0 0 2px` } };
    }
    if (state === 'success' && theme.palette.success) {
      return {
        style: { boxShadow: `${theme.palette.success.main} 0 0 0 1px` },
      };
    }
  }
  return {};
};

export const KeyboardDatePicker: FunctionComponent<KeyboardDatePickerViewsPropsWithoutTheme> = forwardRef(
  (props: IKeyboardDatePickerViewsProps, ref: any) => {
    const customStyle = getStateStyleFromTheme(props);

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
      InputProps={customStyle}
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
