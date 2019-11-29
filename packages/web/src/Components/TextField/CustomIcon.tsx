import React, { FunctionComponent, ComponentType } from 'react';
import styled from 'styled-components';
import { IThemeWeb } from 'Themes';
import { tokens } from '@naturacosmeticos/natds-styles';
import { getProp } from './shared';

interface ICustomIcon {
  theme: IThemeWeb | unknown;
  icon?: ComponentType | undefined;
  onIconPress?: () => (void);
}

const CustomIcon: FunctionComponent<ICustomIcon> = (props: ICustomIcon) => {
  if (!props.icon) return null;

  const { theme, icon, onIconPress } = props;
  const style = onIconPress ? { cursor: 'pointer' } : {};

  return (
    <ClearIconStyled
      theme={theme}
      style={style}
      onClick={onIconPress}>
      {icon}
    </ClearIconStyled>
  );
};

export default CustomIcon;

const ClearIconStyled = styled.i`
  width: ${tokens.spacing.spacingStandard}px;
  height: ${tokens.spacing.spacingStandard}px;
  fill:  ${getProp('palette', 'text', 'primary')};
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${tokens.spacing.spacingSmall}px;
  margin: auto;
`;
