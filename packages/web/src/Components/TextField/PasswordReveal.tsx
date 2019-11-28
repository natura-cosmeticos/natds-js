import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
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
}

const PasswordReveal: FunctionComponent<IPasswordReveal> = (props: IPasswordReveal) => {
  const { theme, onTogglePasswordReveal, showing } = props;
  const Component = showing ? HidePasswordIcon : ShowPasswordIcon;

  return (
    <Component
      theme={theme}
      onClick={() => onTogglePasswordReveal(!showing)}
    />
  );
}

export default PasswordReveal;

const baseIcon = `
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

const ShowPasswordIcon = styled(VisibilityIcon)`${baseIcon}`;
const HidePasswordIcon = styled(VisibilityIconOff)`${baseIcon}`;
