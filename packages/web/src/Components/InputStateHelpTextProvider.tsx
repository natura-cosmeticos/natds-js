/**
 * @todo refactor(web): refactor InputStateHelpTextProvider
 */
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ITheme, tokens } from "@naturacosmeticos/natds-styles";
import ErrorIcon from "@material-ui/icons/HighlightOffOutlined";
import SuccessIcon from "@material-ui/icons/CheckCircleOutline";

import { getColorByState, getProp, stateStyles } from "./TextField/shared";

export interface IInputStateHelpTextProviderProps {
  id?: string;
  theme?: ITheme;
  label?: string;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
  state: "error" | "success" | undefined;
  className?: string;
  children?: any;
  readOnly?: boolean;
}

// eslint-disable-next-line complexity
export const InputStateHelpTextProvider: FunctionComponent<IInputStateHelpTextProviderProps> = (props: IInputStateHelpTextProviderProps) => {
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
      readOnly = false,
    } = props,

    content = label && required ? `${label} *` : label,
    IconState = stateIcons[String(state)],
    stateIcon = IconState && <IconState theme={theme} />;

  return (
    <Container theme={theme} className={className}>
      {content
        && <Label theme={theme} htmlFor={id} state={state} disabled={disabled}>
          {content}
        </Label>
      }
      {children}
      {!readOnly && helpText
        && <HelpText theme={theme} state={state} disabled={disabled}>
          {stateIcon}
          {helpText}
        </HelpText>
      }
    </Container>
  );
};

export default InputStateHelpTextProvider;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-family: ${getProp("typography", "fontFamily")};
`,

  Label = styled.label`
  font-size: ${getProp("typography", "subtitle2", "fontSize")};
  font-weight: ${getProp("typography", "subtitle2", "fontWeight")};
  color: ${getColorByState(stateStyles.hover)};
  line-height: 1.2;
  padding: 0 0 ${tokens.spacing.spacingMicro}px;
  font-family: ${getProp("typography", "subtitle2", "fontFamily")};
`,

  HelpText = styled.span`
  font-size: ${getProp("typography", "caption", "fontSize")};
  font-weight: ${getProp("typography", "caption", "fontWeight")};
  color: ${getColorByState(stateStyles.hover)};
  line-height: 1.2;
  padding: ${tokens.spacing.spacingMicro}px 0 0;
  display: flex;
  align-items: center;
  font-family: ${getProp("typography", "subtitle2", "fontFamily")};
`,

  baseIcon = `
  width: 16px!important;
  height: 16px!important;
  margin-right: 4px;
`,

  IconError = styled(ErrorIcon)`
  ${baseIcon}
`,

  IconSuccess = styled(SuccessIcon)`
  ${baseIcon}
`,

  stateIcons = {
    error: IconError,
    success: IconSuccess,
  };
