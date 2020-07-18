import * as React from "react";
import { select, boolean } from "@storybook/addon-knobs";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
  Radio,
} from "@naturacosmeticos/natds-web";

import DialogDocs from "./Dialog.docs.mdx";

export default {
  title: "Components|Dialog",
  component: Dialog,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: ["Dialog"],
    theme: {
      context: "web",
    },
    docs: {
      page: DialogDocs,
    },
  },
};

const maxWidth: any = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

export const Interactive = () => {
  const [
    open, setOpen,
  ] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={Boolean(boolean("fullWidth", false))}
        maxWidth={select("maxWidth", maxWidth, maxWidth.sm)}
      >
        <DialogTitle>Lorem ipsum</DialogTitle>
        <DialogContent dividers={Boolean(boolean("dividers", false))}>
          <DialogContentText>
            <Radio /> Option list 1
          </DialogContentText>
          <DialogContentText>
            <Radio /> Option list 1
          </DialogContentText>
          <DialogContentText>
            <Radio /> Option list 1
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Alert = () => <Dialog open={true} maxWidth="xs">
  <DialogContent>
    <DialogContentText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.?
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button>Cancel</Button>
    <Button>Action</Button>
  </DialogActions>
</Dialog>;
export const Simple = () => <Dialog open={true} maxWidth="xs" fullWidth={true}>
  <DialogTitle>Lorem ipsum</DialogTitle>
  <DialogContent>
    <DialogContentText>
      <Radio /> Option list 1
    </DialogContentText>
    <DialogContentText>
      <Radio /> Option list 1
    </DialogContentText>
    <DialogContentText>
      <Radio /> Option list 1
    </DialogContentText>
  </DialogContent>
</Dialog>;
export const Confirmation = () => <Dialog open={true} fullWidth={true} maxWidth="xs">
  <DialogTitle>Lorem ipsum</DialogTitle>
  <DialogContent dividers>
    <DialogContentText>
      <Radio /> Option list 1
    </DialogContentText>
    <DialogContentText>
      <Radio /> Option list 1
    </DialogContentText>
    <DialogContentText>
      <Radio /> Option list 1
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button>Cancel</Button>
    <Button>Ok</Button>
  </DialogActions>
</Dialog>;
