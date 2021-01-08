// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Image as component } from "./Image";
import { ImageProps } from "./Image.props";
import { argTypes } from "./Image.argTypes";

const Image : React.ForwardRefExoticComponent<ImageProps> = React.lazy(() => import("./Image"));

export default {
  argTypes,
  component,
  title: "Components/Image",
} as Meta;

const Template : Story<ImageProps> = (args: ImageProps) => <Image {...args} />;

export const Playground : Story<ImageProps> = Template.bind({});
Playground.args = {
  alt: "Nat Natura holding a cat",
  src: "https://pbs.twimg.com/profile_images/1308179129267781632/wLDnEiOy_400x400.jpg",
};

export const WithOverlay : Story<ImageProps> = Template.bind({});
WithOverlay.args = {
  alt: "Nat Natura holding a cat",
  src: "https://pbs.twimg.com/profile_images/1308179129267781632/wLDnEiOy_400x400.jpg",
  state: true,
};

export const WithRadius : Story<ImageProps> = Template.bind({});
WithRadius.args = {
  alt: "Nat Natura holding a cat",
  src: "https://pbs.twimg.com/profile_images/1308179129267781632/wLDnEiOy_400x400.jpg",
  radius: true,
};

export const Fallback : Story<ImageProps> = Template.bind({});
Fallback.args = {
  alt: "Nat Natura holding a cat",
  src: "https://pbs.twimg.com/profile_images/308179129267781632/wLDnEiOy_400x400.jpg",
  fallback: "https://zeroheight.com/uploads/CKp-xkMzUziuVtBy4yXxyg.jpg",
  maxWidth: "veryHuge",
};
