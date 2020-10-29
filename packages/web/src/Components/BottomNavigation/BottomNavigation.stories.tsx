import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { BottomNavigation, IBottomNavigationProps } from "./BottomNavigation";
import { BottomNavigationAction } from "../BottomNavigationAction";
import {
  WithCancelIcon,
  WithCheckIcon,
  WithHomeIcon,
  WithPlayIcon,
} from "../BottomNavigationAction/BottomNavigationAction.stories";
import { argTypes } from "./BottomNavigation.argTypes";

export default {
  argTypes,
  component: BottomNavigation,
  subcomponents: { BottomNavigationAction },
  title: "Components/Bottom Navigation",
} as Meta;

const Template : Story<IBottomNavigationProps> = (args: IBottomNavigationProps) => {

  const [currentActionName, setCurrentActionName] = React.useState<string>(WithHomeIcon.args.value);

  const handleChange = (event: unknown, value: string) => {
    setCurrentActionName(value);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <BottomNavigation {...args} onChange={handleChange} value={currentActionName}>
      <BottomNavigationAction {...WithHomeIcon.args} />
      <BottomNavigationAction {...WithCancelIcon.args} />
      <BottomNavigationAction {...WithCheckIcon.args} />
      <BottomNavigationAction {...WithPlayIcon.args} />
    </BottomNavigation>
  );

};

export const Playground : Story<IBottomNavigationProps> = Template.bind({});
Playground.args = {
  showLabels: false,
};

export const ShowingLabels : Story<IBottomNavigationProps> = Template.bind({});
ShowingLabels.args = {
  showLabels: true,
  value: "btn2",
};

export const NotShowingLabels : Story<IBottomNavigationProps> = Template.bind({});
NotShowingLabels.args = {
  showLabels: false,
  value: "btn2",
};
