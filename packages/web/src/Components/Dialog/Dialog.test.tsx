import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Dialog } from "./Dialog";
import { DialogTitle } from "../DialogTitle";
import { DialogContent } from "../DialogContent";
import { DialogContentText } from "../DialogContentText";
import { DialogActions } from "../DialogActions";
import { Button } from "../Button";

// eslint-disable-next-line mocha/no-skipped-tests
describe.skip("Dialog components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - Opened", () => {
      const testRenderer = TestRenderer.create(<Dialog open={true}>Dialog test children text</Dialog>);

      expect(testRenderer).toMatchSnapshot("Dialog opened snapshot");
    });

    test("should match to snapshot - with title", () => {
      const children = <DialogTitle>Dialog title test text</DialogTitle>,
        testRenderer = TestRenderer.create(<Dialog open={true}>{children}</Dialog>);

      expect(testRenderer).toMatchSnapshot("Dialog with title snapshot");
    });

    test("should match to snapshot - with content", () => {
      const testRenderer = TestRenderer.create(<Dialog open={true}>
        <DialogContent>Dialog content test text</DialogContent>
      </Dialog>);

      expect(testRenderer).toMatchSnapshot("Dialog with content snapshot");
    });

    test("should match to snapshot - with content text", () => {
      const testRenderer = TestRenderer.create(<Dialog open={true}>
        <DialogContent>
          <DialogContentText>Dialog content test text</DialogContentText>
        </DialogContent>
      </Dialog>);

      expect(testRenderer).toMatchSnapshot("Dialog with content text snapshot");
    });

    test("should match to snapshot - with actions", () => {
      const testRenderer = TestRenderer.create(<Dialog open={true}>
        <DialogContent>
          <DialogContentText>Dialog content test text</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Action</Button>
        </DialogActions>
      </Dialog>);

      expect(testRenderer).toMatchSnapshot("Dialog with actions snapshot");
    });

    test("should match to snapshot - with content divider", () => {
      const testRenderer = TestRenderer.create(<Dialog open={true}>
        <DialogTitle>Dialog title test text</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>Dialog content text</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Action</Button>
        </DialogActions>
      </Dialog>);

      expect(testRenderer).toMatchSnapshot("Dialog with content divider snapshot");
    });
  });
});
