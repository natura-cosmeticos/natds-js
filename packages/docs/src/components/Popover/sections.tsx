import React from 'react';
import { Button, Link, Popover } from '@naturacosmeticos/natds-web';

const PopoverWrapper = ({
  direction = 'left',
  showActionLink,
}: {
  direction?: any;
  showActionLink?: boolean;
}) => {
  const [anchor, setAnchor] = React.useState();

  const actionLink = showActionLink && {
    text: 'Close Popover',
    onClick: () => alert('Action link was clicked.'),
  } || undefined;

  return (
    <div
      style={{
        height: '92px',
        width: '280px',
        display: 'flex',
        alignItems: direction.includes('top') ? 'flex-end' : 'flex-start',
        justifyContent: direction.includes('left') ? 'flex-end' : 'flex-start',
      }}
    >
      <Button
        aria-describedby={direction}
        ref={setAnchor}
        variant="contained"
        color="primary"
      >
        Open Popover
      </Button>
      <Popover
        id={direction}
        open={anchor}
        direction={direction}
        anchorEl={anchor}
        actionLink={actionLink}
      >
        Lorem ipsum dolor
      </Popover>
    </div>
  );
};

export const attributes = [
  {
    title: 'Direction',
    component: <PopoverWrapper />,
  },
  {
    title: 'Action Link',
    component: <PopoverWrapper showActionLink />,
  },
];

export const directions = [
  {
    title: 'top',
    component: <PopoverWrapper direction="top" />,
  },
  {
    title: 'top-start',
    component: <PopoverWrapper direction="top-start" />,
  },
  {
    title: 'top-end',
    component: <PopoverWrapper direction="top-end" />,
  },
  {
    title: 'bottom',
    component: <PopoverWrapper direction="bottom" />,
  },
  {
    title: 'bottom-start',
    component: <PopoverWrapper direction="bottom-start" />,
  },
  {
    title: 'bottom-end',
    component: <PopoverWrapper direction="bottom-end" />,
  },
  {
    title: 'right',
    component: <PopoverWrapper direction="right" />,
  },
  {
    title: 'right-start',
    component: <PopoverWrapper direction="right-start" />,
  },
  {
    title: 'right-end',
    component: <PopoverWrapper direction="right-end" />,
  },
  {
    title: 'left',
    component: <PopoverWrapper direction="left" />,
  },
  {
    title: 'left-start',
    component: <PopoverWrapper direction="left-start" />,
  },
  {
    title: 'left-end',
    component: <PopoverWrapper direction="left-end" />,
  },
];
