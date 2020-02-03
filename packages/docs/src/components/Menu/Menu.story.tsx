import * as React from 'react';
import { Menu, MenuItem, Button } from '@naturacosmeticos/natds-web';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { boolean } from '@storybook/addon-knobs';
import MenuDocs from './Menu.docs.mdx';

export default {
  title: 'Components|Menu',
  component: Menu,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Menu'],
    theme: {
      context: 'web'
    },
    docs: {
      page: MenuDocs
    }
  }
};

export const Interactive = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const button = boolean('button', true);

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} button={button}>Profile</MenuItem>
        <MenuItem onClick={handleClose} button={button}>My account</MenuItem>
        <MenuItem onClick={handleClose} button={button}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
