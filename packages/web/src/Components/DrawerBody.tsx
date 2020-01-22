import React, { FunctionComponent, useState } from 'react';
import { withTheme } from '@material-ui/core';
import styled from 'styled-components';
import { IThemeWeb } from 'Themes';

export interface IDrawerBodyProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  theme: IThemeWeb | unknown;
}

const DrawerBody: FunctionComponent<IDrawerBodyProps> = (props: IDrawerBodyProps) => {
  const { children, component, theme, ...rest } = props;
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = (event: any) => setScrolled(event.target.scrollTop > 0);

  return (
    <DrawerBodyComponent
      scrolled={scrolled}
      as={component}
      theme={theme}
      {...rest}>
      <DrawerBodyScrollComponent
        onScroll={handleScrolled}
        theme={theme}>
        {children}
      </DrawerBodyScrollComponent>
    </DrawerBodyComponent>
  );
};

export default withTheme(DrawerBody);

const DrawerBodyComponent = styled.div<{ scrolled: boolean, theme: IThemeWeb }>`
  flex: 1 1 auto;
  display: flex;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    box-shadow: ${({ scrolled }) => (scrolled ? 'rgba(0, 0, 0, .14) inset 0 9px 5px -5px' : 'none')};
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

const DrawerBodyScrollComponent = styled.div<{ theme: IThemeWeb }>`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: ${({ theme }) => `0 ${theme.sizes?.tiny}px`};
  position: relative;
`;
