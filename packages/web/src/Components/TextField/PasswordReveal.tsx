import React, { FunctionComponent, Dispatch, SetStateAction, ComponentType } from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityIconOff from '@material-ui/icons/VisibilityOffOutlined';

import { IThemeWeb } from 'Themes';
import { tokens } from '@naturacosmeticos/natds-styles';
import { getProp } from './shared';

interface IPasswordReveal {
  theme: IThemeWeb | unknown;
  showing: boolean;
  onTogglePasswordReveal: Dispatch<SetStateAction<boolean>>;
  showPasswordIcon?: ComponentType;
  hidePasswordIcon?: ComponentType;
}

const baseIconStyle = `
  width: ${tokens.spacing.spacingStandard}px;
  height: ${tokens.spacing.spacingStandard}px;
  fill:  ${getProp('palette', 'text', 'primary')};
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${tokens.spacing.spacingSmall}px;
  margin: auto;
  cursor: pointer;
`;

const PasswordReveal: FunctionComponent<IPasswordReveal> = (props: IPasswordReveal) => {
  const {
    theme,
    onTogglePasswordReveal,
    showing,
    showPasswordIcon = VisibilityIcon,
    hidePasswordIcon = VisibilityIconOff
  } = props;

  const Component: ComponentType<any> = showing
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

