import { Story } from "@storybook/react";
import * as React from "react";
import { ITypographyProps, TypographyVariant } from "./Typography.props";
import { Typography } from "./Typography";
import { useTypographyTokens } from "../../hooks/useTypographyTokens";
import { Container } from "../Container";
import { variants } from "./__fixtures__/variants";

export const Template: Story<ITypographyProps> = (args) => (
  <Typography {...args}>{args.children || "Text"}</Typography>
);
export const TemplateWithVariants : Story<ITypographyProps> = (args) => {

  const typographyTokens = useTypographyTokens();

  return (
    <Container>
      {
        Object.keys(variants).map((variant: TypographyVariant) => (
          <Typography {...args} display={"block"} key={variant} variant={variant}>
            {variant} {typographyTokens[variant]?.fontSize}<abbr title={"pixels"}>px</abbr>
          </Typography>
        ))
      }
    </Container>
  );
};

export const TemplateWithAlignments : Story<ITypographyProps> = (args) => (
  <div>
    <Typography {...args} align={"left"}>left: {args.children || "Left alignment"}</Typography>
    <Typography {...args} align={"center"}>center: {args.children || "Center alignment"}</Typography>
    <Typography {...args} align={"right"}>right: {args.children || "Right alignment"}</Typography>
  </div>
);
