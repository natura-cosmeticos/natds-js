import React, { FunctionComponent, forwardRef, useState } from "react";
import { withTheme } from "@material-ui/core";
import styled from "styled-components";
import { IThemeWeb } from "Themes";
import { getDefaultTheme } from "./shared";

export interface IDrawerBodyProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  theme: IThemeWeb | unknown;
}

export const DrawerBody: FunctionComponent<IDrawerBodyProps> = forwardRef((
  props: IDrawerBodyProps,
  ref: any
) => {
  const { children, component, "theme": providerTheme, ...rest } = props;
  const [
    scrolled,
    setScrolled
  ] = useState(false);
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);
  const SCROLL_POSITION_ZERO = 0;
  const handleScrolled = (event: any) => setScrolled(event.target.scrollTop > SCROLL_POSITION_ZERO);

  return (
    <DrawerBodyComponent
      scrolled={scrolled}
      as={component}
      theme={theme}
      ref={ref}
      {...rest}>
      <DrawerBodyScrollComponent
        onScroll={handleScrolled}
        theme={theme}>
        {children}
      </DrawerBodyScrollComponent>
    </DrawerBodyComponent>
  );
});

export default withTheme(DrawerBody);

/**
 * @todo refactor(web): replace string by shadow token
 */
const SCROLLED_BOX_SHADOW = "rgba(0, 0, 0, .14) inset 0 9px 5px -5px";

/**
 * @todo refactor(web): replace string by shadow token
 */
const NOT_SCROLLED_BOX_SHADOW = "none";

const getDrawerBodyComponentBoxShadow = ({ scrolled }: { scrolled: boolean }) => {
  if (scrolled) {
    return SCROLLED_BOX_SHADOW;
  }

  return NOT_SCROLLED_BOX_SHADOW;

};

export const DrawerBodyComponent = styled.div<{ scrolled: boolean, theme: IThemeWeb }>`
  flex: 1 1 auto;
  display: flex;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    box-shadow: ${({scrolled}) => getDrawerBodyComponentBoxShadow({scrolled})};
    height: 10px;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    transition: box-shadow ease-in-out .1s;
    z-index: 2;
  }
`;

export const DrawerBodyScrollComponent = styled.div<{ theme: IThemeWeb }>`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: ${({ theme }) => `0 ${theme.sizes.tiny}px`};
  position: relative;
`;
