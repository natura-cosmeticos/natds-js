import { Meta, Story } from "@storybook/react";
// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { Rating as component } from "./Rating";
import { IRatingProps } from "./Rating.props";
import { argTypes } from "./Rating.argTypes";
import { sizes } from "./__fixtures__/sizes";

const Rating : React.ForwardRefExoticComponent<IRatingProps> = React.lazy(() => import("./Rating"));

export default {
  argTypes,
  component,
  title: "Components/Rating",
} as Meta;

const Template : Story<IRatingProps> = (args: IRatingProps) => <Rating id={args.id} {...args} />;

export const Playground : Story<IRatingProps> = Template.bind({});
Playground.args = {
  id: "rating",
  size: sizes.small,
  rate: 3
};