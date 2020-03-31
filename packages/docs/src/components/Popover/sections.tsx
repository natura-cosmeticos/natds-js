import React from 'react';
import {
  Button,
  Popover,
  Paper,
  Typography,
} from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';

const PopoverWrapper = ({ placement }: { placement?: any }) => {
  const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const anchorRef = React.useRef(null);

  const [open, setOpen] = React.useState(false);

  const handleClickButton = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <>
      <Button
        aria-describedby={placement}
        ref={anchorRef}
        variant="contained"
        color="primary"
        onClick={handleClickButton}
      >
        Open Popover
      </Button>
      <Popover
        id={placement}
        open={open}
        placement={placement}
        anchorEl={anchorRef.current}
      >
        <Paper elevation={3} variant="elevation">
          <Typography className={classes.typography}>
            Lorem ipsum dolor
          </Typography>
        </Paper>
      </Popover>
    </>
  );
};

export const placements = [
  {
    title: 'bottom-end',
    component: <PopoverWrapper placement="bottom-end" />,
  },
  {
    title: 'bottom-start',
    component: <PopoverWrapper placement="bottom-start" />,
  },
  {
    title: 'bottom',
    component: <PopoverWrapper placement="bottom" />,
  },
  {
    title: 'left-end',
    component: <PopoverWrapper placement="left-end" />,
  },
  {
    title: 'left-start',
    component: <PopoverWrapper placement="left-start" />,
  },
  {
    title: 'left',
    component: <PopoverWrapper placement="left" />,
  },
  {
    title: 'right-end',
    component: <PopoverWrapper placement="right-end" />,
  },
  {
    title: 'right-start',
    component: <PopoverWrapper placement="right-start" />,
  },
  {
    title: 'right',
    component: <PopoverWrapper placement="right" />,
  },
  {
    title: 'top-end',
    component: <PopoverWrapper placement="top-end" />,
  },
  {
    title: 'top-start',
    component: <PopoverWrapper placement="top-start" />,
  },
  {
    title: 'top',
    component: <PopoverWrapper placement="top" />,
  },
];
