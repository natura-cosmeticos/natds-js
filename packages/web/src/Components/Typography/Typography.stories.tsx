import * as React from "react";
import { Story } from "@storybook/react";
import { argTypes } from "./Typography.argTypes";

import { ITypographyProps, Typography } from "./Typography";
import { Container } from "../Container";
import { useTypographyTokens } from "../../hooks/useTypographyTokens";
import { TypographyVariant } from "./Typography.props";
import variants from "./__fixtures__/variants";

export default {
  argTypes,
  component: Typography,
  title: "Components/Typography (text)",
};

const Template: Story<ITypographyProps> = (args) => <Typography {...args}>{args.children}</Typography>;

export const Playground: Story<ITypographyProps> = Template.bind({});
Playground.args = {
  children: "Text",
};

export const Variants: Story<ITypographyProps> = (args) => {

  const typographyTokens = useTypographyTokens();

  return (
    <Container>
      {
        variants.map((variant: TypographyVariant) => (
          <Typography {...args} display={"block"} key={variant} variant={variant}>
            {variant} {typographyTokens[variant]?.fontSize}
          </Typography>
        ))
      }
    </Container>
  );
};
Variants.storyName = "Variants";

export const Alignments: Story<ITypographyProps> = (args) => (
  <React.Fragment>
    <Typography {...args} align={"left"}>left: {args.children || "Left alignment"}</Typography>
    <Typography {...args} align={"center"}>center: {args.children || "Center alignment"}</Typography>
    <Typography {...args} align={"right"}>right: {args.children || "Right alignment"}</Typography>
  </React.Fragment>
);
Alignments.storyName = "Alignments";

export const Heading1: Story<ITypographyProps> = Template.bind({});
Heading1.args = {
  children: "Typography example",
  variant: "h1",
};
Heading1.storyName = "Heading 1 (h1) example";

export const Heading2: Story<ITypographyProps> = Template.bind({});
Heading2.args = {
  children: "Typography example for heading level 2 (h2)",
  variant: "h2",
};
Heading2.storyName = "Heading 2 (h2) example";

export const Heading3: Story<ITypographyProps> = Template.bind({});
Heading3.args = {
  children: "Typography example for heading level 3 (h3)",
  variant: "h3",
};
Heading3.storyName = "Heading 3 (h3) example";

export const Body1: Story<ITypographyProps> = Template.bind({});
Body1.args = {
  children: "Typography example for body1 variant",
  variant: "body1",
};
Body1.storyName = "Body1 example";

export const Caption: Story<ITypographyProps> = Template.bind({});
Caption.args = {
  children: "Typography example for caption variant",
  variant: "caption",
};

export const AppBarTitle: Story<ITypographyProps> = Template.bind({});
AppBarTitle.args = {
  children: "Typography example for AppBar contents",
  component: "h1",
  style: {
    flexGrow: 1,
  },
  variant: "h6",
};
AppBarTitle.storyName = "AppBar title";

export const ProminentAppBarTitle: Story<ITypographyProps> = Template.bind({});
ProminentAppBarTitle.args = {
  ...AppBarTitle.args,
  children: "Typography example for prominent AppBar contents",
  style: {
    ...AppBarTitle.args.style,
    alignSelf: "flex-end",
  },
};
ProminentAppBarTitle.storyName = "Prominent AppBar title";
