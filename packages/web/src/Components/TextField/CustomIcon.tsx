import React, { ComponentType, FunctionComponent } from "react";
import styled from "styled-components";
import { tokens } from "@naturacosmeticos/natds-styles";
import { IThemeWeb } from "../../Themes";

export interface ICustomIcon {
  theme: IThemeWeb | unknown;
  icon?: ComponentType | undefined;
  onIconPress?: () => (void);
}

export const CustomIcon: FunctionComponent<ICustomIcon> = (props: ICustomIcon) => {
  const { theme, icon, onIconPress } = props,
    style = onIconPress ? { cursor: "pointer" } : {};

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

// @todo rewrite to remove dependency from StyledComponents
const ClearIconStyled = styled.i`
  width: ${tokens.spacing.spacingStandard}px;
  height: ${tokens.spacing.spacingStandard}px;
  position: absolute;
  top: ${tokens.spacing.spacingSmall}px;
  right: ${tokens.spacing.spacingSmall}px;

  &, & > svg { fill: inherit!important; }
`;
