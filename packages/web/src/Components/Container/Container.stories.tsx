import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Container, IContainerProps } from "./Container";
import { argTypes } from "./Container.argTypes";

export default {
  argTypes,
  component: Container,
  title: "Utilities/Container",
} as Meta;

const Template : Story<IContainerProps> = (args) => {
  const useStyles = makeStyles(createStyles({
    root: {
      backgroundColor: "#FF00FF1A",
    },
  }), { name: "ContainerDemo" });
  const classes = useStyles();

  return <Container className={classes.root} {...args}>{args.children}</Container>;
};

export const Playground : Story<IContainerProps> = Template.bind({});
Playground.args = {
  children: "Example content here",
};

export const FluidWithSmMaxSize : Story<IContainerProps> = Template.bind({});
FluidWithSmMaxSize.args = {
  ...Playground.args,
  maxWidth: "sm",
};
FluidWithSmMaxSize.parameters = {
  docs: {
    description: {
      story: "A fluid container with is bounded by the `maxWidth` property value.",
    },
  },
};

export const FluidWithXsMaxSize : Story<IContainerProps> = Template.bind({});
FluidWithXsMaxSize.args = {
  ...Playground.args,
  maxWidth: "xs",
};

export const Fixed : Story<IContainerProps> = Template.bind({});
Fixed.args = {
  ...Playground.args,
  fixed: true,
};
Fixed.parameters = {
  docs: {
    description: {
      story: `
If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport,
you can set the \`fixed\` property. The max-width matches the min-width of the current breakpoint.
`,
    },
  },
};
