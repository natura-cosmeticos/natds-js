import * as React from "react";
import { Menu, MenuItem, Button } from "@naturacosmeticos/natds-web";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import { boolean } from "@storybook/addon-knobs";
import MenuDocs from "./Menu.docs.mdx";

export default {
  "title": "Components|Menu",
  "component": Menu,
  "decorators": [
    withJest(),
    withContainer
  ],
  "parameters": {
    "jestImportPath": "web",
    "jest": ["Menu"],
    "theme": {
      "context": "web"
    },
    "docs": {
      "page": MenuDocs
    }
  }
};

const Item = React.forwardRef((props: any, ref: any) => {
  const { selected, handleItemClick, button, children, ...rest } = props;

  return (
    <MenuItem
      ref={ref}
      data-key={children}
      selected={selected === children}
      onClick={handleItemClick}
      button={button}
      {...rest}>
      {children}
    </MenuItem>
  );
});

export const Interactive = () => {
  const [
    anchorEl,
    setAnchorEl
  ] = React.useState(null);
  const [
    selected,
    setSelected
  ] = React.useState(null);

  const handleButtonClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (event: any) => {
    const selectedItem = event.target.dataset.key;
    let newSelected = null;

    if (selected !== selectedItem) {
      newSelected = selectedItem;
    }

    setSelected(newSelected);
    setAnchorEl(null);
  };

  const button = boolean("button", true);

  const itemProps = {
    button,
    selected,
    handleItemClick
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Open Menu</Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleItemClick}
      >
        <Item {...itemProps} disabled>Profile</Item>
        <Item {...itemProps}>My account</Item>
        <Item {...itemProps}>Logout</Item>
      </Menu>
    </div>
  );
};
