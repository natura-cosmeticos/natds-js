import React, { ComponentType, FunctionComponent } from "react";
import styled from "styled-components";
import { IThemeWeb } from "Themes";
import { tokens } from "@naturacosmeticos/natds-styles";

export interface ICustomIcon {
  theme: IThemeWeb | unknown;
  icon?: ComponentType | undefined;
  onIconPress?: () => (void);
}

export const CustomIcon: FunctionComponent<ICustomIcon> = (props: ICustomIcon) => {
  const { theme, icon, onIconPress } = props;
  const style = onIconPress ? { cursor: "pointer" } : {};

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
  position: absolute;
  top: ${tokens.spacing.spacingSmall}px;
  right: ${tokens.spacing.spacingSmall}px;

  &, & > svg { fill: inherit!important; }
`;
