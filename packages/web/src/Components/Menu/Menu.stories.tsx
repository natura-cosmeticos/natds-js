import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Menu } from "./Menu";
import { IMenuProps } from "./Menu.props";
import { argTypes } from "./Menu.argTypes";
import { MenuItem } from "../MenuItem";
import { Button } from "../Button";

export default {
  argTypes,
  component: Menu,
  title: "Components/Menu",
} as Meta;

const Template : Story<IMenuProps> = (args: IMenuProps) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    handleClose();
  };

  const options = [
    "Profile",
    "My account",
    "Logout",
  ];

  return <div>
    <Button onClick={handleButtonClick}>Open menu</Button>
    <Menu
      anchorEl={anchorEl}
      onClose={handleClose}
      open={Boolean(anchorEl)}
      {...args}>
      {options.map((option: string, index:number) => (
        <MenuItem
          button={true}
          key={option}
          onClick={(event) => handleMenuItemClick(event, index)}
          selected={index === selectedIndex}>
          {option}
        </MenuItem>
      ))}
    </Menu>
  </div>;
};

export const Playground : Story<IMenuProps> = Template.bind({});
Playground.args = {
  keepMounted: true,
};
