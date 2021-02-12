import React from "react";
import { Meta, Story } from "@storybook/react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { ProgressIndicator } from "./ProgressIndicator";
import { IProgressIndicatorProps } from "./ProgressIndicator.props";
import { argTypes } from "./ProgressIndicator.argTypes";

export default {
  argTypes,
  component: ProgressIndicator,
  title: "Components/Progress Indicator",
} as Meta;

const useStyles = makeStyles(
  createStyles({
    progressIndicator: {
      margin: "0 16px",
    },
  }),
  { name: "ProgressIndicatorDemo" },
);

ProgressIndicator.displayName = "ProgressIndicator";

export const Playground: Story<IProgressIndicatorProps> = (args: IProgressIndicatorProps) => <ProgressIndicator {...args} />;

export const Sizes: Story<IProgressIndicatorProps> = (args) => {
  const classes = useStyles();

  return (
    <>
      <ProgressIndicator
        {...args}
        size={24}
        className={classes.progressIndicator}
      />
      <ProgressIndicator
        {...args}
        size={32}
        className={classes.progressIndicator}
      />
      <ProgressIndicator
        {...args}
        size={48}
        className={classes.progressIndicator}
      />
      <ProgressIndicator
        {...args}
        size={64}
        className={classes.progressIndicator}
      />
    </>
  );
};
