import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Image } from "./Image";
import { ImageProps } from "./Image.props";
import { argTypes } from "./Image.argTypes";

export default {
  argTypes,
  component: Image,
  title: "Components/Image",
} as Meta;

const Template : Story<ImageProps> = (args: ImageProps) => <Image {...args} />;

export const Playground : Story<ImageProps> = Template.bind({});
Playground.args = {
  alt: "Nat Natura holding a cat",
  src: "https://pbs.twimg.com/profile_images/1285932878795333632/Wl95KE_m_400x400.jpg",
};
