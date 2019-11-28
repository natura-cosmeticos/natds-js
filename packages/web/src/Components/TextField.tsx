import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { withTheme } from '@material-ui/styles';
import { IThemeWeb } from 'Themes';
import { tokens } from '@naturacosmeticos/natds-styles';

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
   * The input type property
   */
  type?: 'text' | 'password' | 'search' | string;
  /**
   * @optional
   * Uses a textarea as input
   */
  multiline?: boolean;
}

const TextField: FunctionComponent<ITextFieldProps> = (props: ITextFieldProps) => {
  const {
    id,
    label,
    helpText,
    theme,
    required = false,
    disabled = false,
    status,
    multiline,
    placeholder = ' ', // Placeholder should always exist to make filled state work
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
      <Field
        theme={theme}
        id={id}
        status={status}
        disabled={disabled}
        as={multiline ? 'textarea' : 'input'}
        placeholder={placeholder}
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

const stateStyle = {
  default: { type: 'text', key: 'hint', borderWidth: '0 0 0 1px' },
  disabled: { type: 'text', key: 'disabled', borderWidth: '0 0 0 1px' },
  hover: { type: 'text', key: 'secondary', borderWidth: '0 0 0 1px' },
  filled: { type: 'text', key: 'primary', borderWidth: '0 0 0 1px' },
  focus: { type: 'primary', key: 'main', borderWidth: '0 0 0 2px' },
  error: { type: 'error', key: 'main', borderWidth: '0 0 0 2px' },
  success: { type: 'success', key: 'main', borderWidth: '0 0 0 1px' },
};

interface IStateTypes {
  type: string;
  key: string;
  borderWidth: string;
}

function getProp(namespace: string, type: string, key?: string) {
  return ({ theme }: { theme?: any }) => {
    const propNamespace = theme[namespace] || {};
    const propType = propNamespace[type] || {};

    return key ? propType[key] : propType;
  };
}

function getState({ disabled, status }: Pick<ITextFieldProps, 'disabled' | 'status'>, initial: IStateTypes) {
  return (disabled ? stateStyle.disabled : stateStyle[status|| '']) || initial;
}

function getColorByState(initial: IStateTypes) {
  return (props:ITextFieldProps) => {
    const { type, key } = getState(props, initial);

    return getProp('palette', type, key)(props);
  };
}

function getBorderByState(initial: IStateTypes) {
  return (props: ITextFieldProps) => {
    const { type, key, borderWidth } = getState(props, initial);

    return `${getProp('palette', type, key)(props)} ${borderWidth}`;
  };
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-family: ${getProp('typography', 'fontFamily')};
`;

const Label = styled.label`
  font-size: ${getProp('typography', 'subtitle2', 'fontSize')};
  font-weight: ${getProp('typography', 'subtitle2', 'fontWeight')};
  color: ${getColorByState(stateStyle.default)};
  line-height: 1.2;
  padding: 0 0 ${tokens.spacing.spacingMicro}px;
`;

const Field = styled.input`
  border: 0;
  border-radius: ${getProp('shape', 'borderRadius')}px;
  box-sizing: border-box;
  width: 100%;
  line-height: ${tokens.spacing.spacingStandard}px;
  min-height: ${tokens.spacing.spacingLarge}px;
  outline: none;
  color: ${getProp('palette', 'text', 'primary')};
  font-size: ${getProp('typography', 'body2', 'fontSize')};
  font-weight: ${getProp('typography', 'body2', 'fontWeight')};
  flex: 1 1 100%;
  padding: ${tokens.spacing.spacingSmall}px;
  resize: vertical;

  &:disabled,
  &:disabled::placeholder,
  &:disabled:hover {
    color: ${getProp('palette', 'text', 'disabled')};
  }

  &:disabled,
  &:disabled:hover {
    box-shadow: ${getProp('palette', 'text', 'disabled')} 0 0 0 1px;
  }

  &::placeholder {
    color: ${getProp('palette', 'text', 'hint')};
  }

  &:placeholder-shown {
    box-shadow: ${getBorderByState(stateStyle.default)};
  }

  &:not(:placeholder-shown) {
    box-shadow: ${getBorderByState(stateStyle.filled)};
  }

  &:hover {
    box-shadow: ${getBorderByState(stateStyle.hover)};
  }

  &:focus {
    box-shadow: ${getBorderByState(stateStyle.focus)};
  }
`;

const HelpText = styled.span`
  font-size: ${getProp('typography', 'caption', 'fontSize')};
  font-weight: ${getProp('typography', 'caption', 'fontWeight')};
  color: ${getColorByState(stateStyle.default)};
  line-height: 1.2;
  padding: ${tokens.spacing.spacingMicro}px 0 0;
`;
