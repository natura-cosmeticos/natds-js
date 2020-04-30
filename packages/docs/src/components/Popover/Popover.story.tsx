import React from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Popover, Button } from '@naturacosmeticos/natds-web';

import PopoverDocs from './Popover.docs.mdx';
import { select, text } from '@storybook/addon-knobs';

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

const directions: any = {
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

const actionsLink: any = {
  with: {
    onClick: () => alert('Action link was clicked.'),
    text: 'Action link',
  },
  without: undefined,
};

export const Interactive = () => {
  const anchorRef = React.useRef(null);

  const [open, setOpen] = React.useState(false);

  const handleClickButton = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const id = open ? 'popover' : undefined;

  return (
    <div
      style={{
        height: '250px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
        direction={select('Direction', directions, directions.bottom)}
        actionLink={select('Action link', actionsLink, actionsLink.with)}
      >
        {text('Popover text', 'Lorem ipsum dolor sit amet')}
      </Popover>
    </div>
  );
};
