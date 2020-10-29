import { Meta, Story } from "@storybook/react";
import * as React from "react";
import SnackbarContent, { ISnackbarContentProps } from "./SnackbarContent";
import { IconButton } from "../IconButton";
import { CloseButtonExample } from "../IconButton/IconButton.stories";
import { Typography } from "../Typography";
import { Body2 } from "../Typography/Typography.stories";
import { Icon } from "../Icon";
import { SmallIcon } from "../Icon/Icon.stories";
import { Spacing } from "../Spacing";
import { colors } from "./__fixtures__/colors";
import { Button } from "../Button";
import { ForSnackbar } from "../Button/Button.stories";

export default {
  component: SnackbarContent,
  subcomponents: { IconButton, Typography },
  title: "Components/Snackbar (toast)/Snackbar Content",
} as Meta;

const Template : Story<ISnackbarContentProps> = (args: ISnackbarContentProps) => (
  <SnackbarContent
    {...args}
    message={<Typography {...Body2.args}>{args.message}</Typography>}
  />
);

export const Playground : Story<ISnackbarContentProps> = Template.bind({});
Playground.args = {
  color: colors.default,
  message: "This is a message",
};

export const WithButton : Story<ISnackbarContentProps> = Template.bind({});
WithButton.args = {
  ...Playground.args,
  action: <Button {...ForSnackbar.args}>Button text</Button>,
};

export const WithCloseButton : Story<ISnackbarContentProps> = Template.bind({});
WithCloseButton.args = {
  ...Playground.args,
  action: <IconButton {...CloseButtonExample.args} />,
};

export const WithLongerMessage : Story<ISnackbarContentProps> = Template.bind({});
WithLongerMessage.args = {
  ...Playground.args,
  message: "This is a longer message to see how it works",
};

export const DefaultColor : Story<ISnackbarContentProps> = Template.bind({});
DefaultColor.args = {
  ...Playground.args,
  color: colors.default,
};

export const ErrorColor : Story<ISnackbarContentProps> = Template.bind({});
ErrorColor.args = {
  ...Playground.args,
  color: colors.error,
};

export const SuccessColor : Story<ISnackbarContentProps> = Template.bind({});
SuccessColor.args = {
  ...Playground.args,
  color: colors.success,
};

export const WarningColor : Story<ISnackbarContentProps> = Template.bind({});
WarningColor.args = {
  ...Playground.args,
  color: colors.warning,
};

export const InfoColor : Story<ISnackbarContentProps> = Template.bind({});
InfoColor.args = {
  ...Playground.args,
  color: colors.info,
};

export const WithButtonIconAndText : Story<ISnackbarContentProps> = Template.bind({});
WithButtonIconAndText.args = {
  ...Playground.args,
  message: <div style={{ alignItems: "center", display: "flex" }}>
    <Spacing marginRight={"tiny"}>
      <Icon {...SmallIcon.args} name={"filled-brand-naturarosacea"} />
    </Spacing>
    <Typography key={"typography"} {...Body2.args}>This is a message</Typography>
  </div>,
};
WithButtonIconAndText.storyName = "With Button, Icon and text";
