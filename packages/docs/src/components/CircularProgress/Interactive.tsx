import * as React from 'react';
import { text, number, boolean, select } from '@storybook/addon-knobs';
import { CircularProgress } from '@naturacosmeticos/natds-web';
import { PropTypes } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const Interactive = () => {
  const primary: PropTypes.Color = 'primary';
  const secondary: PropTypes.Color = 'secondary';
  const inherit: PropTypes.Color = 'inherit';

  const colors: any = {
    primary,
    secondary,
    default: inherit,
  };

  const variants: any = {
    determinate: 'determinate',
    indeterminate: 'indeterminate',
    static: 'static',
  };

  const variant = select('Variant', variants, variants.indeterminate)
  // const isIndeterminate = select('teste', variants, variants.indeterminate);
  const withVariantDeterminate = variant
    ? boolean('Disabled', false)
    : undefined


  return (
    <CircularProgress
      size={number('Size', 40)}
      thickness={number('Thickness', 3.6)}
      value={number('Value', 70)}
      color={select('Colors', colors, colors.primary)}
      variant={variant}
      disableShrink={variant ? boolean('Disabled', false): undefined}
    />
    
  );
};
