import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import Icon from './Icon';
import {
  KeyboardDatePicker as MaterialKeyboardDatePicker,
  KeyboardDatePickerProps as DatePickerViewsProps,
} from '@material-ui/pickers/DatePicker';
import styled from 'styled-components';
import { getColorByState, getProp, stateStyles } from './TextField/shared';
import { tokens } from '@naturacosmeticos/natds-styles';
import ErrorIcon from "@material-ui/icons/HighlightOffOutlined";
import SuccessIcon from "@material-ui/icons/CheckCircleOutline";

// export { DatePickerViewsProps as IKeyboardDatePickerViewsProps } from '@material-ui/pickers/DatePicker';

type DatePickerViewsWithoutKeyboardIconProps = Omit<
  DatePickerViewsProps,
  'keyboardIcon'
>;

export type IKeyboardDatePickerViewsProps = DatePickerViewsWithoutKeyboardIconProps & {
  state: any,
  theme: any,
  helpText: any
};

export const KeyboardDatePicker: FunctionComponent<IKeyboardDatePickerViewsProps> = forwardRef(
  (props: IKeyboardDatePickerViewsProps, ref: any) => {

    const {
      label,
      required,
      state,
      theme,
      disabled,
      helpText,
      className
    } = props;

    const content = label && required ? `${label} *` : label;
    const IconState = stateIcons[String(state)];
    const stateIcon = IconState && <IconState theme={theme} />;

    const styleError = !disabled && state === 'error' && { style: { boxShadow: `${theme.palette.error.main} 0 0 0 1px` } };
    const styleSuccess = !disabled && state === 'success' && { style: { boxShadow: `${theme.palette.success.main} 0 0 0 1px` } };
    const customStyle = styleError || styleSuccess || {};

    return (
      <Container theme={theme} className={className}>
      <MaterialKeyboardDatePicker
        {...props}
        required={false}
        label={<Label
          theme={theme}
          state={state}
          disabled={disabled}>
          {content}
        </Label>}
        keyboardIcon={<Icon name="outlined-action-calendar" size="tiny" />}
        ref={ref}
        helperText={
          helpText && (
            <HelpText
              theme={theme}
              state={state}
              disabled={disabled}
            >
              {stateIcon}
              {helpText}
            </HelpText>
          )
        }
        inputProps={customStyle}
      />
      </Container>
    );
  }
);

export default withTheme(KeyboardDatePicker);

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-family: ${getProp('typography', 'fontFamily')};
`;

const Label = styled.label`
  font-size: ${getProp('typography', 'subtitle2', 'fontSize')};
  font-weight: ${getProp('typography', 'subtitle2', 'fontWeight')};
  color: ${getColorByState(stateStyles.hover)};
  line-height: 1.2;
  padding: 0 0 ${tokens.spacing.spacingMicro}px;
  font-family: ${getProp('typography', 'subtitle2', 'fontFamily')}
`;

const HelpText = styled.span`
  font-size: ${getProp('typography', 'caption', 'fontSize')};
  font-weight: ${getProp('typography', 'caption', 'fontWeight')};
  color: ${getColorByState(stateStyles.hover)};
  line-height: 1.2;
  padding: ${tokens.spacing.spacingMicro}px 0 0;
  display: flex;
  align-items: center;
  font-family: ${getProp('typography', 'subtitle2', 'fontFamily')};
`;

const baseIcon = `
  width: 16px!important;
  height: 16px!important;
  margin-right: 4px;
`;

const IconError = styled(ErrorIcon)`${baseIcon}`;

const IconSuccess = styled(SuccessIcon)`${baseIcon}`;

const stateIcons = {
  'error': IconError,
  'success': IconSuccess,
};
