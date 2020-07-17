import * as React from "react";
import { mount } from "enzyme";
import { expect } from "chai";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "..";

describe("Dialog components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - Opened", () => {
      const component = mount(<Dialog open={true}>Dialog test children text</Dialog>);

      expect(component).matchSnapshot("Dialog opened snapshot");
    });

    test("should match to snapshot - with title", () => {
      const children = <DialogTitle>Dialog title test text</DialogTitle>,
        component = mount(<Dialog open={true}>{children}</Dialog>);

      expect(component).matchSnapshot("Dialog with title snapshot");
    });

    test("should match to snapshot - with content", () => {
      const component = mount(<Dialog open={true}>
        <DialogContent>Dialog content test text</DialogContent>
      </Dialog>);

      expect(component).matchSnapshot("Dialog with content snapshot");
    });

    test("should match to snapshot - with content text", () => {
      const component = mount(<Dialog open={true}>
        <DialogContent>
          <DialogContentText>Dialog content test text</DialogContentText>
        </DialogContent>
      </Dialog>);

      expect(component).matchSnapshot("Dialog with content text snapshot");
    });

    test("should match to snapshot - with actions", () => {
      const component = mount(<Dialog open={true}>
        <DialogContent>
          <DialogContentText>Dialog content test text</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Action</Button>
        </DialogActions>
      </Dialog>);

      expect(component).matchSnapshot("Dialog with actions snapshot");
    });

    test("should match to snapshot - with content divider", () => {
      const component = mount(<Dialog open={true}>
        <DialogTitle>Dialog title test text</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>Dialog content text</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Action</Button>
        </DialogActions>
      </Dialog>);

      expect(component).matchSnapshot("Dialog with content divider snapshot");
    });
  });
});
