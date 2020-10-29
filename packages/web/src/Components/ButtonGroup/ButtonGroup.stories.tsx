import { Story } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { IButtonGroupProps } from "./ButtonGroup.props";
import { Button } from "../Button";
import { colors } from "./__fixtures__/colors";
import { variants } from "./__fixtures__/variants";
import { sizes } from "./__fixtures__/sizes";
import Template, {
  TemplateWithColors,
  TemplateWithIconButtons,
  TemplateWithIcons,
  TemplateWithVariants,
} from "./Template";

export default {
  component: ButtonGroup,
  subcomponents: { Button },
  title: "Components/Button Group",
};

export const Playground : Story<IButtonGroupProps> = Template.bind({});
Playground.args = {
  color: colors.primary,
  disabled: false,
  size: sizes.medium,
  variant: variants.contained,
};

export const Contained : Story<IButtonGroupProps> = TemplateWithColors.bind({});
Contained.args = {
  ...Playground.args,
  variant: variants.contained,
};

export const Outlined : Story<IButtonGroupProps> = TemplateWithColors.bind({});
Outlined.args = {
  ...Playground.args,
  variant: variants.outlined,
};

export const Text : Story<IButtonGroupProps> = TemplateWithColors.bind({});
Text.args = {
  ...Playground.args,
  variant: variants.text,
};

export const Small : Story<IButtonGroupProps> = Template.bind({});
Small.args = {
  ...Playground.args,
  size: sizes.small,
};

export const Medium : Story<IButtonGroupProps> = Template.bind({});
Medium.args = {
  ...Playground.args,
  size: sizes.medium,
};

export const Large : Story<IButtonGroupProps> = Template.bind({});
Large.args = {
  ...Playground.args,
  size: sizes.large,
};

export const Disabled : Story<IButtonGroupProps> = TemplateWithVariants.bind({});
Disabled.args = {
  ...Playground.args,
  disabled: true,
};

export const WithIcons : Story<IButtonGroupProps> = TemplateWithIcons.bind({});
WithIcons.args = Playground.args;

export const WithIconButtons : Story<IButtonGroupProps> = TemplateWithIconButtons.bind({});
WithIconButtons.args = {
  ...Playground.args,
  color: colors.secondary,
  variant: variants.text,
};
WithIconButtons.parameters = {
  docs: {
    description: {
      story: `
If you intend to use the \`IconButton\` component within \`ButtonGroup\`,
we recommend the \`text\` variation.
`,
    },
  },
};

export const UsageExample : Story<IButtonGroupProps> = Template.bind({});
UsageExample.args = {
  color: colors.primary,
  size: sizes.large,
  variant: variants.contained,
};
