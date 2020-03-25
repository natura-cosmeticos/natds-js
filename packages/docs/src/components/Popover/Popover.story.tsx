import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import {
  Popover,
  Button,
  Typography,
  Paper,
} from '@naturacosmeticos/natds-web';

import PopoverDocs from './Popover.docs.mdx';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Components|Popover',
  component: Popover,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Popover'],
    theme: {
      contop: 'web',
    },
    docs: {
      page: PopoverDocs,
    },
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  })
);

const placements: any = {
  bottomEnd: 'bottom-end',
  bottomStart: 'bottom-start',
  bottom: 'bottom',
  leftEnd: 'left-end',
  leftStart: 'left-start',
  left: 'left',
  rightEnd: 'right-end',
  rightStart: 'right-start',
  right: 'right',
  topEnd: 'top-end',
  topStart: 'top-start',
  top: 'top',
};

export const Interactive = () => {
  const classes = useStyles();

  const anchorRef = React.useRef(null);

  const [open, setOpen] = React.useState(false);

  const handleClickButton = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const id = open ? 'popover' : undefined;

  return (
    <div style={{ margin: '40px 260px' }}>
      <Button
        aria-describedby={id}
        ref={anchorRef}
        variant="contained"
        color="primary"
        onClick={handleClickButton}
      >
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorRef.current}
        placement={select('placement', placements, placements.bottom)}
      >
        <Paper elevation={3} variant="elevation">
          <Typography className={classes.typography}>
            Lorem ipsum dolor sit amet
          </Typography>
        </Paper>
      </Popover>
    </div>
  );
};
