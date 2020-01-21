import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core';
import { tokens } from '@naturacosmeticos/natds-styles';

const { spacingTiny } = tokens.spacing;

export interface IDrawerFooterProps {
  children?: React.ReactNode;
  component?: React.ElementType;
}

const DrawerFooter: FunctionComponent<IDrawerFooterProps> = (props: IDrawerFooterProps) => {
  const { children, component, ...rest } = props;

  return (
    <DrawerFooterComponent as={component} {...rest}>
      {children}
    </DrawerFooterComponent>
  );
}

export default withTheme(DrawerFooter);

const DrawerFooterComponent = styled.div`
  border-top: ${({ theme }) => (`${theme.palette.divider} 1px solid`)};
  flex: 0 0 auto;
  padding: ${spacingTiny}px;
`;
