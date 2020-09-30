import React, { FunctionComponent, forwardRef } from "react";
import styled from "styled-components";
import { withTheme } from "@material-ui/core";
import { IThemeWeb } from "../Themes";
import { getDefaultTheme } from "../hooks/useDefaultTheme";

export interface IDrawerFooterProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  theme: IThemeWeb | unknown;
}

export const DrawerFooter: FunctionComponent<IDrawerFooterProps> = forwardRef((
  props: IDrawerFooterProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
    children, component, theme: providerTheme, ...rest
  } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

DrawerFooter.displayName = "DrawerFooter";

export default withTheme(DrawerFooter);

const DrawerFooterComponent = styled.div`
  border-top: ${({ theme }) => `${theme.palette.divider} 1px solid`};
  flex: 0 0 auto;
  padding: ${({ theme }) => `0 ${theme.sizes.tiny}px ${theme.sizes.small}px`};
`;
