import * as ReactDOM from "react-dom";
import * as TestRenderer from "react-test-renderer";
import initStoryshots, { Stories2SnapsConverter } from "@storybook/addon-storyshots";
import { createNodeMock } from "../__mocks__/createNodeMock";
import { MockReactDOM } from "../__mocks__/ReactDOM";

jest.mock("react-dom");

initStoryshots({
  framework: "react",
  test: ({ story, context, done }) => {

    const converter = new Stories2SnapsConverter();
    const snapshotFilename = converter.getSnapshotFileName(context);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ReactDOM.createPortal = jest.fn(MockReactDOM.createPortal);

    const storyElement = story.render();

    const testRenderer = TestRenderer.create(storyElement, { createNodeMock });

    if (snapshotFilename) {
      expect(testRenderer).toMatchSpecificSnapshot(snapshotFilename);
    }

    if (typeof done === "function") {
      done();
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ReactDOM.createPortal.mockClear();

  },
});
