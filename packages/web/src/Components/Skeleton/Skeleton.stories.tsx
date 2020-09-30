import * as React from "react";
import { Story } from "@storybook/react";
import { argTypes } from "./Skeleton.argTypes";
import * as TypographyStories from "../Typography/Typography.stories";
import * as AvatarStories from "../Avatar/Avatar.stories";

import { ISkeletonProps, Skeleton } from "./Skeleton";
import { Typography } from "../Typography";
import { Avatar } from "../Avatar";

export default {
  argTypes,
  component: Skeleton,
  title: "Components/Skeleton",
};

const Template: Story<ISkeletonProps> = (args) => <Skeleton {...args} />;

export const Playground : Story<ISkeletonProps> = Template.bind({});
Playground.args = {};

export const Text : Story<ISkeletonProps> = Template.bind({});
Text.args = { variant: "text" };

export const Circle : Story<ISkeletonProps> = Template.bind({});
Circle.args = { height: "semix", variant: "circle", width: "semix" };

export const Rect : Story<ISkeletonProps> = Template.bind({});
Rect.args = { height: "hugex", variant: "rect", width: "veryhuge" };

export const DefaultAnimation : Story<ISkeletonProps> = Template.bind({});
DefaultAnimation.args = { width: "veryhuge" };
DefaultAnimation.storyName = "Default animation (pulse)";

export const NoAnimation : Story<ISkeletonProps> = Template.bind({});
NoAnimation.args = { animation: false, width: "veryhuge" };

export const WaveAnimation : Story<ISkeletonProps> = Template.bind({});
WaveAnimation.args = { animation: "wave", width: "veryhuge" };

const TemplateWithChildren: Story<ISkeletonProps> = (args) => <>
  <Skeleton {...args} />
  {args.children}
</>;

export const WithTypographyHeading1 : Story<ISkeletonProps> = TemplateWithChildren.bind({});
WithTypographyHeading1.args = {
  children: <Typography {...TypographyStories.Heading1.args}>Skeleton with <abbr title={"Heading level 1"}>h1</abbr></Typography>,
};
WithTypographyHeading1.storyName = "With Typography Heading level 1";

export const WithTypographyHeading3 : Story<ISkeletonProps> = TemplateWithChildren.bind({});
WithTypographyHeading3.args = {
  children: <Typography {...TypographyStories.Heading3.args}>Skeleton with heading 3 example</Typography>,
};
WithTypographyHeading3.storyName = "With Typography Heading level 3";

export const WithTypographyBody1Variant : Story<ISkeletonProps> = TemplateWithChildren.bind({});
WithTypographyBody1Variant.args = {
  children: <Typography {...TypographyStories.Body1.args}>Skeleton with body1 example</Typography>,
};

export const WithTypographyCaption : Story<ISkeletonProps> = TemplateWithChildren.bind({});
WithTypographyCaption.args = {
  children: <Typography {...TypographyStories.Caption.args}>Skeleton with caption example</Typography>,
};

export const WithLoadingAvatar : Story<ISkeletonProps> = TemplateWithChildren.bind({});
WithLoadingAvatar.args = {
  children: <Avatar {...AvatarStories.Image.args} />,
  variant: "circle",
};
WithLoadingAvatar.parameters = {
  docs: {
    description: {
      story: `
When it comes to other components, you may not want to repeat the height and width.
In these instances, you can pass \`children\` and it will infer its width and height from them.
`,
    },
  },
};
