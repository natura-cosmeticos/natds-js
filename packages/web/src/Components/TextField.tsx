import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { withTheme } from '@material-ui/styles';
import { IThemeWeb } from 'Themes';

interface ITextFieldProps {
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
   * Optional status for component variant
   */
  status?: 'error' | 'success' | undefined;
  /**
   * @optional
   * Optional input type property
   */
  type?: 'text' | 'password' | 'search' | 'email' | string;
}

const TextField: FunctionComponent<ITextFieldProps> = (props: ITextFieldProps) => {
  const {
    id,
    label,
    helpText,
    theme,
    required = false,
    disabled = false,
    status = '',
    type = 'text',
    ...rest
  } = props;

  const content = required ? `${label} *` : label;

  return (
    <Container theme={theme}>
      <Label
        theme={theme}
        htmlFor={id}
        status={status}
        disabled={disabled}>
        {content}
      </Label>
      <Input
        theme={theme}
        id={id}
        type={type}
        status={status}
        disabled={disabled}
        {...rest}
      />
      <HelpText
        theme={theme}
        status={status}
        disabled={disabled}>
        {helpText}
      </HelpText>
    </Container>
  );
};

export default withTheme(TextField);

const stateColors = {
  disabled: { namespace: 'text', key: 'disabled' },
  error: { namespace: 'error', key: 'main' },
  success: { namespace: 'success', key: 'main' },
  initial: { namespace: 'text', key: 'hint' },
  primary: { namespace: 'primary', key: 'main' },
};

function getTypoProp({ typography = {} }: IThemeWeb, key: string) {
  return typography[key];
}

function getShapeProp({ shape = {} }: IThemeWeb) {
  return shape.borderRadius && `${shape.borderRadius}px`;
}

function getColor({ palette = {} }: IThemeWeb, namespace: string, key: string) {
  return palette[namespace] && palette[namespace][key] ? palette[namespace][key] : palette[namespace];
}

function getColorByState(initial: any) {
  return ({ theme, disabled, status }: { theme: IThemeWeb, disabled: boolean, status: string }) => {
    const { namespace, key } = (disabled ? stateColors.disabled : stateColors[status]) || initial;

    return getColor(theme, namespace, key);
  };
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-family: ${({ theme = {} }) => getTypoProp(theme, 'fontFamily')};
`;

const Label = styled.label`
  font-size: ${({ theme = {} }) => getTypoProp(theme, 'subtitle2').fontSize};
  font-weight: ${({ theme = {} }) => getTypoProp(theme, 'subtitle2').fontWeight};
  color: ${getColorByState(stateColors.initial)};
  line-height: 1.2;
  padding: 0 0 4px;
`;

const Input = styled.input`
  border: 0;
  border-radius: ${({ theme = {} }) => getShapeProp(theme)};
  box-shadow: ${getColorByState(stateColors.initial)} 0 0 0 1px;
  box-sizing: border-box;
  width: 100%;
  min-height: 56px;
  outline: none;
  color: ${({ theme = {} }) => getColor(theme, 'text', 'primary')};
  font-size: ${({ theme = {} }) => getTypoProp(theme, 'body2').fontSize};
  font-weight: ${({ theme = {} }) => getTypoProp(theme, 'body2').fontWeight};
  flex: 1 1 100%;
  padding: 16px;

  &:hover {
    box-shadow: ${({ theme = {} }) => getColor(theme, 'grey', '600')} 0 0 0 1px;
  }

  &:focus {
    box-shadow: ${getColorByState(stateColors.primary)} 0 0 0 2px;
  }

  &:disabled,
  &:disabled::placeholder,
  &:disabled:hover {
    color: ${({ theme = {} }) => getColor(theme, 'text', 'disabled')};
  }

  &:disabled,
  &:disabled:hover {
    box-shadow: ${({ theme = {} }) => getColor(theme, 'text', 'disabled')} 0 0 0 1px;
  }

  &::placeholder {
    color: ${({ theme = {} }) => getColor(theme, 'text', 'hint')};
  }
`;

const HelpText = styled.span`
  font-size: ${({ theme = {} }) => getTypoProp(theme, 'caption').fontSize};
  font-weight: ${({ theme = {} }) => getTypoProp(theme, 'caption').fontWeight};
  color: ${getColorByState(stateColors.initial)};
  line-height: 1.2;
  padding: 4px 0 0;
`;
