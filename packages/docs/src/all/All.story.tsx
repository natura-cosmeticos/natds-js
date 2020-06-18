import * as React from "react";
import withContainer from "@decorators/container/withContainer";
import { useStyles } from "./styles";
import { WrappedButtons } from "./Buttons";
import { WrappedChips } from "./Chips";
import { WrappedTabs } from "./Tabs";
import { WrappedIconButtons } from "./IconButtons";
import { WrappedCard } from "./Card";
import { WrappedTextField } from "./TextField";
import { WrappedAppBars } from "./AppBars";
import { WrappedAvatar } from "./Avatar";

export const All = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WrappedAppBars />
      <WrappedCard />
      <WrappedTextField />
      <WrappedButtons />
      <WrappedAvatar />
      <WrappedChips />
      <WrappedTabs />
      <WrappedIconButtons />
    </div>
  );
};

export default {
  title: "Samples|All",
  component: All,
  decorators: [withContainer],
  parameters: {
    jestImportPath: "web",
    theme: {
      context: "web"
    },
  },
};
