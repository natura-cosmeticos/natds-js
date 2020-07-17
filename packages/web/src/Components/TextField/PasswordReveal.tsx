import React, { ComponentType, Dispatch, FunctionComponent, SetStateAction } from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityIconOff from '@material-ui/icons/VisibilityOffOutlined';

import { IThemeWeb } from 'Themes';
import { tokens } from '@naturacosmeticos/natds-styles';

export interface IPasswordReveal {
  theme: IThemeWeb | unknown;
  showing: boolean;
  onTogglePasswordReveal: Dispatch<SetStateAction<boolean>>;
  showPasswordIcon?: ComponentType;
  hidePasswordIcon?: ComponentType;
}

const baseIconStyle = `
  width: ${tokens.spacing.spacingStandard}px;
  height: ${tokens.spacing.spacingStandard}px;
  position: absolute;
  top: ${tokens.spacing.spacingSmall}px;
  right: ${tokens.spacing.spacingSmall}px;
  cursor: pointer;

  &, & > svg { fill: inherit!important; }
`;

export const PasswordReveal: FunctionComponent<IPasswordReveal> = (props: IPasswordReveal) => {
  const {
      theme,
      onTogglePasswordReveal,
      showing,
      showPasswordIcon = VisibilityIcon,
      hidePasswordIcon = VisibilityIconOff
    } = props,

    Component: ComponentType<any> = showing
      ? styled(hidePasswordIcon)`${baseIconStyle}`
      : styled(showPasswordIcon)`${baseIconStyle}`;

  return (
    <Component
      theme={theme}
      onClick={() => onTogglePasswordReveal(!showing)}
    />
  );
};

export default PasswordReveal;

