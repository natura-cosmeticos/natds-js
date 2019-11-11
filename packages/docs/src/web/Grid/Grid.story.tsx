import * as React from 'react';
import { select, text, number } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

import { GridContainer, GridItem } from '@naturacosmeticos/natds-web';
import './styles.scss';
import { width } from '@material-ui/system';

export default {
  title: 'Web|Grid',
  component: GridContainer,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['GridContainer'],
    theme: 'web'
  }
};

const breakpoint = {
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};

const gridItemBreakpointProps = {
  md: [
    { md: 12 },
    { md: 6 },
    { md: 6 },
    { md: 4 },
    { md: 4 },
    { md: 4 },
    { md: 2 },
    { md: 2 },
    { md: 2 },
    { md: 2 },
    { md: 2 },
    { md: 2 },
    { md: 1 },
    { md: 1 },
    { md: 1 },
    { md: 1 },
    { md: 1 },
    { md: 1 },
    { md: 1 },
    { md: 1 },
    { md: 1 },
    { md: 1 },
    { md: 1 },
    { md: 1 }
  ],
  sm: [
    { sm: 8, md: 12 },
    { sm: 4, md: 6 },
    { sm: 4, md: 6 },
    { sm: 2, md: 3 },
    { sm: 2, md: 3 },
    { sm: 2, md: 3 },
    { sm: 2, md: 3 },
    { sm: 1, md: 2 },
    { sm: 1, md: 2 },
    { sm: 1, md: 2 },
    { sm: 1, md: 2 },
    { sm: 1, md: 2 },
    { sm: 1, md: 2 }
  ],
  xs: [
    { xs: 4, sm: 12 },
    { xs: 2, sm: 6 },
    { xs: 2, sm: 6 },
    { xs: 1, sm: 3 },
    { xs: 1, sm: 3 },
    { xs: 1, sm: 3 },
    { xs: 1, sm: 3 }
  ]
};

const maxBreakpointWidth = {
  md: { maxWidth: '1179px' },
  sm: { maxWidth: '959px' },
  xs: { maxWidth: '599px' }
};

const mountGridItem = (selectBreakpoint: any, value: any, key: number) => {
  return (
    <GridItem key={key} {...value}>
      <div>{selectBreakpoint}</div>
    </GridItem>
  );
};

const mapGridItemBreakpoint = (selectBreakpoint: string) => {
  return gridItemBreakpointProps[selectBreakpoint].map(
    (value: any, key: number) => mountGridItem(selectBreakpoint, value, key)
  );
};

export const Fluid = () => {
  const selectBreakpoint = select('Breakpoint', breakpoint, breakpoint.md);
  const maxBreakpointWidthStyle = maxBreakpointWidth[selectBreakpoint] || {};

  return (
    <div className="grid__container">
      <h4 className="grid__title">
        Breakpoint {selectBreakpoint} ({JSON.stringify(maxBreakpointWidthStyle)}
        )
      </h4>
      <GridContainer spacing={3} style={maxBreakpointWidthStyle}>
        {mapGridItemBreakpoint(selectBreakpoint)}
      </GridContainer>
    </div>
  );
};

export const Interactive = () => {
  return (
    <div className="grid__container" style={{ width: '100%' }}>
      <GridContainer spacing={3}>
        <GridItem
          md={number('md', 12)}
          sm={number('sm', 12)}
          xs={number('xs', 12)}>
          Label
        </GridItem>
      </GridContainer>
    </div>
  );
};
