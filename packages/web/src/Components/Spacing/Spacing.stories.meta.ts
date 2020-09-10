import { Meta } from "@storybook/react";
import spacingArgTypes from "./Spacing.argTypes";
import Spacing from "./Spacing";

export const meta = {
  argTypes: spacingArgTypes,
  component: Spacing,
  parameters: {
    layout: "fullscreen",
  },
  title: "Components/Spacing",
} as Meta;

export default meta;
