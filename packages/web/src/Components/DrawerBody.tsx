import React, { FunctionComponent, useState } from 'react';
import { withTheme } from '@material-ui/core';
import { tokens } from '@naturacosmeticos/natds-styles';
import styled from 'styled-components';

export interface IDrawerBodyProps {
  children?: React.ReactNode;
  component?: React.ElementType;
}

const { spacingTiny } = tokens.spacing;

const DrawerBody: FunctionComponent<IDrawerBodyProps> = (props: IDrawerBodyProps) => {
  const { children, component, ...rest } = props;
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = (event: any) => setScrolled(event.target.scrollTop > 0);

  return (
    <DrawerBodyComponent
      scrolled={scrolled}
      as={component}
      onScroll={handleScrolled}
      {...rest}>
      {children}
    </DrawerBodyComponent>
  );
}

export default withTheme(DrawerBody);

const DrawerBodyComponent = styled.div<{ scrolled: boolean }>`
  box-shadow: ${({ scrolled }) => (scrolled ? 'rgba(0, 0, 0, .14) inset 0 9px 5px -5px' : 0)};
  flex: 1 1 auto;
  overflow-y: auto;
  padding: ${spacingTiny}px;
  position: relative;
  transition: box-shadow ease-in-out .1s;
`;
