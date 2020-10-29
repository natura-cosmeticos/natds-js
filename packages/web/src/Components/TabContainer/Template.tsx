import { Story } from "@storybook/react";
import * as React from "react";
import { ITabContainerProps } from "./TabContainer.props";
import { TabContainer } from "./TabContainer";
import { TabItem } from "../TabItem";
import {
  WithBrandsProductIconAndLabel,
  WithLoveIconAndLabel,
  WithMakeupIconAndLabel,
  WithOutletIconAndLabel,
} from "../TabItem/TabItem.stories";

export const Template : Story<ITabContainerProps> = (args: ITabContainerProps) => {

  const initialTabIndex = 0;

  const [currentTabIndex, setCurrentTabIndex] = React.useState<number>(initialTabIndex);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTabIndex(newValue);
  };

  return (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
    <TabContainer {...args} onChange={handleChange} value={currentTabIndex}>
      <TabItem {...WithLoveIconAndLabel.args} />
      <TabItem {...WithOutletIconAndLabel.args} />
      <TabItem {...WithBrandsProductIconAndLabel.args} />
      <TabItem {...WithMakeupIconAndLabel.args} />
    </TabContainer>
  );
};

export default Template;
