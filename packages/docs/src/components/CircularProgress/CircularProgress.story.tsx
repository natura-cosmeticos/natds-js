import * as React from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { text, number, boolean, select } from '@storybook/addon-knobs';
import { CircularProgress } from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from '@material-ui/core';

import CircularProgressDocs from './CircularProgress.docs.mdx';

export default {
  title: 'Components|ProgressIndicator/CircularProgress',
  component: CircularProgress,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['CircularProgress'],
    theme: {
      context: 'web',
    },
    docs: {
      page: CircularProgressDocs,
    },
  },
};

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

export const Interactive = () => (
  <CircularProgress
    size={number('Size', 40)}
    thickness={number('Thickness', 3.6)}
    value={number('Value', 70)}
    color={select('Colors', colors, colors.primary)}
    variant={select('Variant', variants, variants.indeterminate)}
    disableShrink={boolean('DisabledShrink', false)}
  />
);

export const CircularIndeterminate = () => (
  <CircularProgress
    size={number('Size', 40)}
    thickness={number('Thickness', 3.6)}
    value={number('Value', 70)}
    color={select('Colors', colors, colors.primary)}
    variant="indeterminate"
    disableShrink={boolean('DisabledShrink', false)}
  />
);

export const CircularDeterminate = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <CircularProgress
        variant="determinate"
        size={number('Size', 40)}
        thickness={number('Thickness', 3.6)}
        color={select('Colors', colors, colors.primary)}
        value={progress}
      />
    </div>
  );
};

export const CircularStatic = () => {
  const [completed, setCompleted] = React.useState(0);

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  React.useEffect(() => {
    function progress() {
      setCompleted(prevCompleted =>
        prevCompleted >= 100 ? 0 : prevCompleted + 10
      );
    }

    const timer = setInterval(progress, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="static"
        size={number('Size', 40)}
        thickness={number('Thickness', 3.6)}
        color={select('Colors', colors, colors.primary)}
        value={5}
      />
      <CircularProgress
        variant="static"
        size={number('Size', 40)}
        thickness={number('Thickness', 3.6)}
        color={select('Colors', colors, colors.primary)}
        value={25}
      />
      <CircularProgress
        variant="static"
        size={number('Size', 40)}
        thickness={number('Thickness', 3.6)}
        color={select('Colors', colors, colors.primary)}
        value={50}
      />
      <CircularProgress
        variant="static"
        size={number('Size', 40)}
        thickness={number('Thickness', 3.6)}
        color={select('Colors', colors, colors.primary)}
        value={75}
      />
      <CircularProgress
        variant="static"
        size={number('Size', 40)}
        thickness={number('Thickness', 3.6)}
        color={select('Colors', colors, colors.primary)}
        value={100}
      />
      <CircularProgress
        variant="static"
        size={number('Size', 40)}
        thickness={number('Thickness', 3.6)}
        color={select('Colors', colors, colors.primary)}
        value={completed}
      />
    </div>
  );
};
