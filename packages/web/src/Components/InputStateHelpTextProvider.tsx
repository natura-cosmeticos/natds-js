import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IThemeWeb } from 'Themes';
import { tokens } from '@naturacosmeticos/natds-styles';
import ErrorIcon from '@material-ui/icons/HighlightOffOutlined';
import SuccessIcon from '@material-ui/icons/CheckCircleOutline';

import { getProp, getColorByState, stateStyles } from './TextField/shared';

export interface IInputStateHelpTextProviderProps {
  id?: string;
  theme?: IThemeWeb;
  label?: string;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
  state: 'error' | 'success' | undefined;
  className?: string;
  children?: any;
}

export const InputStateHelpTextProvider: FunctionComponent<IInputStateHelpTextProviderProps> = (
  props: IInputStateHelpTextProviderProps
) => {
  const {
    id,
    label,
    helpText,
    theme,
    required = false,
    disabled = false,
    state,
    className,
    children,
  } = props;

  const content = label && required ? `${label} *` : label;
  const IconState = stateIcons[String(state)];
  const stateIcon = IconState && <IconState theme={theme} />;

  return (
    <Container theme={theme} className={className}>
      {content && (
        <Label theme={theme} htmlFor={id} state={state} disabled={disabled}>
          {content}
        </Label>
      )}
      {children}
      {helpText && (
        <HelpText theme={theme} state={state} disabled={disabled}>
          {stateIcon}
          {helpText}
        </HelpText>
      )}
    </Container>
  );
};

export default InputStateHelpTextProvider;

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
  font-family: ${getProp('typography', 'subtitle2', 'fontFamily')};
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

const IconError = styled(ErrorIcon)`
  ${baseIcon}
`;

const IconSuccess = styled(SuccessIcon)`
  ${baseIcon}
`;

const stateIcons = {
  error: IconError,
  success: IconSuccess,
};
