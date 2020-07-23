import React, { FunctionComponent, forwardRef } from "react";
import styled from "styled-components";
import { withTheme } from "@material-ui/core";
import { IThemeWeb } from "Themes";
import { getDefaultTheme } from "./shared";

export interface IDrawerFooterProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  theme: IThemeWeb | unknown;
}

export const DrawerFooter: FunctionComponent<IDrawerFooterProps> = forwardRef((
  props: IDrawerFooterProps,
  ref: any,
) => {
  const {
    children, component, theme: providerTheme, ...rest
  } = props;
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);

  return (
    <DrawerFooterComponent
      as={component}
      theme={theme}
      {...rest}
      ref={ref}>
      {children}
    </DrawerFooterComponent>
  );
});

export default withTheme(DrawerFooter);

const DrawerFooterComponent = styled.div`
  border-top: ${({ theme }) => `${theme.palette.divider} 1px solid`};
  flex: 0 0 auto;
  padding: ${({ theme }) => `0 ${theme.sizes.tiny}px ${theme.sizes.small}px`};
`;
