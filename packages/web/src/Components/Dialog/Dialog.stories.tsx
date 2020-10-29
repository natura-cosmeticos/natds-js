import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Dialog, IDialogProps } from "./Dialog";
import { DialogTitle } from "../DialogTitle";
import { Playground as DialogTitlePlayground } from "../DialogTitle/DialogTitle.stories";
import { DialogContent } from "../DialogContent";
import { Playground as DialogContentPlayground, WithRadioGroup } from "../DialogContent/DialogContent.stories";
import { DialogActions } from "../DialogActions";
import { Playground as DialogActionsPlayground } from "../DialogActions/DialogActions.stories";
import { Button } from "../Button";
import { ForDialogActions, OutlinedVariant } from "../Button/Button.stories";
import { DialogContentText } from "../DialogContentText";
import { maxWidths } from "./__fixtures__/maxWidths";

export default {
  component: Dialog,
  subcomponents: {
    DialogActions, DialogContent, DialogContentText, DialogTitle,
  },
  title: "Components/Dialog",
} as Meta;

const Template : Story<IDialogProps> = (args: IDialogProps) => {

  const [open, setOpen] = React.useState<IDialogProps["open"]>(args.open);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogClose = (event: unknown, reason: ("backdropClick" | "escapeKeyDown")) => {
    handleClose();
    args.onClose(event, reason);
  };

  return (
    <div>
      <Button {...OutlinedVariant.args} onClick={handleClickToOpen}>
      Open Dialog
      </Button>
      <Dialog {...args} onClose={handleDialogClose} open={open}>
        {args.children}
        <DialogActions {...DialogActionsPlayground.args}>
          <Button {...ForDialogActions.args} onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const Playground : Story<IDialogProps> = Template.bind({});
Playground.args = {
  children: [
    <DialogTitle key={"title"} {...DialogTitlePlayground.args}>
      {DialogTitlePlayground.args.children}
    </DialogTitle>,
    <DialogContent key={"content"} {...DialogContentPlayground.args}>
      {DialogContentPlayground.args.children}
    </DialogContent>,
  ],
  fullWidth: false,
  maxWidth: maxWidths.sm,
  open: false,
};

export const Alert : Story<IDialogProps> = Template.bind({});
Alert.args = {
  children: <DialogContent>
    <DialogContentText>
      This is an alert dialog, with maximum width defined to xs. Note that this dialog does not have a title.
    </DialogContentText>
  </DialogContent>,
  maxWidth: maxWidths.xs,
  open: false,
};

export const Simple : Story<IDialogProps> = Template.bind({});
Simple.args = {
  children: [
    <DialogTitle key={"title"} {...DialogTitlePlayground.args}>
      Simple Dialog Title
    </DialogTitle>,
    <DialogContent key={"content"}>
      <DialogContentText>
      This is a simple dialog example, with full width set to xs. Note that this dialog includes a title.
      </DialogContentText>
    </DialogContent>,
  ],
  fullWidth: true,
  maxWidth: maxWidths.xs,
  open: false,
};

export const SimpleWithRadioGroup : Story<IDialogProps> = Template.bind({});
SimpleWithRadioGroup.args = {
  children: [
    <DialogTitle key={"title"} {...DialogTitlePlayground.args}>
      Simple Dialog with Radio Group
    </DialogTitle>,
    <DialogContent key={"content"} {...WithRadioGroup.args}>
      {WithRadioGroup.args.children}
    </DialogContent>,
  ],
  fullWidth: true,
  maxWidth: maxWidths.xs,
  open: false,
};
