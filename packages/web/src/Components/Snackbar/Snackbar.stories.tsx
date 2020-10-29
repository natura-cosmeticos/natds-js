import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { SnackbarCloseReason } from "@material-ui/core/Snackbar/Snackbar";
import { ISnackbarProps, Snackbar } from "./Snackbar";
import { SnackbarContent } from "../SnackbarContent";
import { Button } from "../Button";
import { ContainedVariant } from "../Button/Button.stories";
import { IconButton } from "../IconButton";
import { CloseButtonExample } from "../IconButton/IconButton.stories";
import { WithButtonIconAndText } from "../SnackbarContent/SnackbarContent.stories";
import { argTypes } from "./Snackbar.argTypes";
import { horizontalAnchorOrigins } from "./__fixtures__/horizontalAnchorOrigins";
import verticalAnchorOrigins from "./__fixtures__/verticalAnchorOrigins";

export default {
  argTypes,
  component: Snackbar,
  subcomponents: { SnackbarContent },
  title: "Components/Snackbar (toast)",
} as Meta;

const Template : Story<ISnackbarProps> = (args: ISnackbarProps) => {

  const [open, setOpen] = React.useState<ISnackbarProps["open"]>(false);

  const handleOpen = () => {
    setOpen((value) => !value);
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason: SnackbarCloseReason) => {
    setOpen(false);
    args.onClose(event, reason);
  };

  return <>
    <Button {...ContainedVariant.args} onClick={handleOpen}>
      Toggle the Snackbar
    </Button>
    <Snackbar {...args} onClose={handleClose} open={open}>
      <SnackbarContent
        {...WithButtonIconAndText.args}
        action={
          <IconButton {...CloseButtonExample.args} onClick={handleClose} />
        }
      />
    </Snackbar>
  </>;
};

export const Playground : Story<ISnackbarProps> = Template.bind({});
Playground.args = {
  anchorOrigin: {
    horizontal: horizontalAnchorOrigins.left,
    vertical: verticalAnchorOrigins.bottom,
  },
  autoHideDuration: 2000,
};

export const NoAutoHide : Story<ISnackbarProps> = Template.bind({});
NoAutoHide.args = {
  ...Playground.args,
  autoHideDuration: null,
};
