import { Story } from "@storybook/react";

import { ITypographyProps, Typography } from "./Typography";
import { variants } from "./__fixtures__/variants";
import { colors } from "./__fixtures__/colors";
import { Template, TemplateWithVariants, TemplateWithAlignments } from "./Template";

export default { component: Typography, title: "Components/Typography (text)" };

export const Playground: Story<ITypographyProps> = Template.bind({});
export const Variants: Story<ITypographyProps> = TemplateWithVariants.bind({});
export const Alignments: Story<ITypographyProps> = TemplateWithAlignments.bind({});

export const Heading1: Story<ITypographyProps> = Template.bind({});
Heading1.args = {
  children: "Typography example",
  variant: variants.h1,
};

export const Heading2: Story<ITypographyProps> = Template.bind({});
Heading2.args = {
  children: "Typography example for heading level 2 (h2)",
  variant: variants.h2,
};

export const Heading3: Story<ITypographyProps> = Template.bind({});
Heading3.args = {
  children: "Typography example for heading level 3 (h3)",
  variant: variants.h3,
};

export const Heading4: Story<ITypographyProps> = Template.bind({});
Heading4.args = {
  children: "Typography example for heading level 4 (h4)",
  variant: variants.h4,
};

export const Heading6: Story<ITypographyProps> = Template.bind({});
Heading6.args = {
  children: "Typography example for heading level 6 (h6)",
  variant: variants.h6,
};

export const Body1: Story<ITypographyProps> = Template.bind({});
Body1.args = {
  children: "Typography example for body1 variant",
  variant: variants.body1,
};

export const Body2: Story<ITypographyProps> = Template.bind({});
Body2.args = {
  children: "Typography example for body2 variant",
  variant: variants.body2,
};

export const Subtitle1: Story<ITypographyProps> = Template.bind({});
Subtitle1.args = {
  children: "Typography example for subtitle1 variant",
  variant: variants.subtitle1,
};

export const Caption: Story<ITypographyProps> = Template.bind({});
Caption.args = {
  children: "Typography example for caption variant",
  variant: variants.caption,
};

export const Overline: Story<ITypographyProps> = Template.bind({});
Overline.args = {
  children: "Overline text",
  variant: variants.overline,
};

export const ForAppBarTitle: Story<ITypographyProps> = Template.bind({});
ForAppBarTitle.args = {
  children: "Typography example for AppBar contents",
  component: "h1",
  variant: variants.h6,
};

export const TextPrimaryColor : Story<ITypographyProps> = Template.bind({});
TextPrimaryColor.args = {
  children: "Typography with text primary color",
  color: colors.textPrimary,
};

export const TextSecondaryColor : Story<ITypographyProps> = Template.bind({});
TextSecondaryColor.args = {
  children: "Typography with text secondary color",
  color: colors.textSecondary,
};

export const CaptionWithSecondaryText : Story<ITypographyProps> = Template.bind({});
CaptionWithSecondaryText.args = {
  ...Caption.args,
  ...TextSecondaryColor.args,
  children: "Typography with caption variant and text secondary color",
};

export const CaptionWithSecondaryParagraph : Story<ITypographyProps> = Template.bind({});
CaptionWithSecondaryParagraph.args = {
  ...CaptionWithSecondaryText.args,
  children: "Paragraph with caption variant and text secondary",
  paragraph: true,
};

export const Subtitle1WithTextPrimaryColor : Story<ITypographyProps> = Template.bind({});
Subtitle1WithTextPrimaryColor.args = {
  ...Subtitle1.args,
  ...TextPrimaryColor.args,
  children: "Subtitle 1 with text primary color",
};

export const Subtitle1WithTextSecondaryColor : Story<ITypographyProps> = Template.bind({});
Subtitle1WithTextSecondaryColor.args = {
  ...Subtitle1.args,
  ...TextSecondaryColor.args,
  children: "Subtitle 1 with text secondary color",
};
