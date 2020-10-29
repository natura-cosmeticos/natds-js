import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Provider } from "./Provider";
import { IProviderProps } from "./Provider.props";

export default {
  component: Provider,
  title: "Utilities/Provider",
} as Meta;

const Template : Story<IProviderProps> = (args: IProviderProps) => (
  <Provider {...args}>
    {args.children}
  </Provider>
);

export const Playground : Story<IProviderProps> = Template.bind({});
