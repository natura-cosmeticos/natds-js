import * as React from "react";
import { Meta } from "@storybook/react";
import { Story } from "@storybook/react/dist/client/preview/types-6-0";
import { IPaperProps } from "./Paper.props";
import { Paper as component } from "./Paper";
import variants from "./__fixtures__/variants";
import { ITypographyProps } from "../Typography";
import argTypes from "./Paper.argTypes";
import { ISpacingProps } from "../Spacing";

const Paper : React.ForwardRefExoticComponent<IPaperProps> = React.lazy(() => import("./Paper"));
const Spacing : React.ForwardRefExoticComponent<ISpacingProps> = React.lazy(() => import("../Spacing"));
const Typography : React.ForwardRefExoticComponent<ITypographyProps> = React.lazy(() => import("../Typography"));

Paper.displayName = "Paper";
Spacing.displayName = "Spacing";
Typography.displayName = "Typography";

export default {
  argTypes,
  component,
  title: "Components/Paper",
} as Meta;

const Template : Story<IPaperProps> = (args) => <Paper {...args}>
  <Spacing padding={"small"}>
    <Typography component={"h3"} gutterBottom={true} variant={"h5"}>This is a sheet of paper.</Typography>
    <Typography component={"p"} gutterBottom={true}>
      Paper can be used to build surface or other elements for your application.
    </Typography>
  </Spacing>
</Paper>;

export const Playground = Template.bind({});
Playground.args = {
  elevation: 3,
  square: false,
  variant: variants.elevation,
};

export const ZeroElevation = Template.bind({});
ZeroElevation.args = {
  elevation: 0,
};

export const DefaultElevation = Template.bind({});
DefaultElevation.args = {};

export const ThreeElevation = Template.bind({});
ThreeElevation.args = {
  elevation: 3,
};

export const ElevationVariant = Template.bind({});
ElevationVariant.args = {
  variant: variants.elevation,
};

export const OutlinedVariant = Template.bind({});
OutlinedVariant.args = {
  variant: variants.outlined,
};

export const OutlinedSquare = Template.bind({});
OutlinedSquare.args = {
  square: true,
  variant: variants.outlined,
};
