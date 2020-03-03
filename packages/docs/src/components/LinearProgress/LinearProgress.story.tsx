import * as React from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { number, select } from '@storybook/addon-knobs';
import { LinearProgress } from '@naturacosmeticos/natds-web';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { PropTypes } from '@material-ui/core';

import LinearProgressDocs from './LinearProgress.docs.mdx';

export default {
  title: 'Components|ProgressIndicator/LinearProgress',
  component: LinearProgress,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['LinearProgress'],
    theme: {
      context: 'web',
    },
    docs: {
      page: LinearProgressDocs,
    },
  },
};


const primary: PropTypes.Color = 'primary';
const secondary: PropTypes.Color = 'secondary';

const colors: any = {
  primary,
  secondary,
};

const variants: any = {
  determinate: 'determinate',
  indeterminate: 'indeterminate',
  buffer: 'buffer',
  query: 'query',
};



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export const Interactive = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress
        value={number('Value', 50)}
        valueBuffer={number('ValueBuffer', 70)}
        color={select('Colors', colors, colors.primary)}
        variant={select('Variants', variants, variants.indeterminate)}
      />
    </div>
  )
};

export const LinearIndeterminate = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress
        value={number('Value', 50)}
        color={select('Colors', colors, colors.primary)}
        variant={select('Variants', variants, variants.indeterminate)}
      />
    </div>
  )
};

export const LinearDeterminate = () => {
  
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <div className={classes.root}>
      <LinearProgress
        value={completed}
        color={select('Colors', colors, colors.primary)}
        variant="determinate"
      />
    </div>
  )
};

export const LinearBuffer = () => {
  
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progress = React.useRef(() => {});
  React.useEffect(() => {
    progress.current = () => {
      if (completed > 100) {
        setCompleted(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setCompleted(completed + diff);
        setBuffer(completed + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    function tick() {
      progress.current();
    }
    const timer = setInterval(tick, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <div className={classes.root}>
      <LinearProgress
        value={completed}
        valueBuffer={buffer}
        color={select('Colors', colors, colors.primary)}
        variant="buffer"
      />
    </div>
  )
};

export const LinearQuery = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress
        value={number('Value', 50)}
        color={select('Colors', colors, colors.primary)}
        variant="query"
      />
    </div>
  )
};