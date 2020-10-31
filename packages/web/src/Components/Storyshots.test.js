import * as ReactDOM from "react-dom";
import * as TestRenderer from "react-test-renderer";
import initStoryshots, { Stories2SnapsConverter } from "@storybook/addon-storyshots";
// eslint-disable-next-line no-use-before-define
import * as React from "react";
import createNodeMock from "../__mocks__/createNodeMock";

jest.mock("react-dom");

const idsToIgnore = [
  // "components-chip--disabled",
];

initStoryshots({
  framework: "react",
  test: ({ story, context, done }) => {

    const converter = new Stories2SnapsConverter();
    const snapshotFilename = converter.getSnapshotFileName(context);

    // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
    ReactDOM.createPortal = jest.fn((element, target) => (
      <div>
        <div id={"content"}>{element}</div>
        <div id={"target"} data-target-tag-name={target.tagName} />
      </div>
    ));

    const storyElement = story.render();

    const testRenderer = TestRenderer.create(storyElement, { createNodeMock });

    if (snapshotFilename && !idsToIgnore.includes(story.id)) {
      expect(testRenderer).toMatchSpecificSnapshot(snapshotFilename);
    }

    if (typeof done === "function") {
      done();
    }

    ReactDOM.createPortal.mockClear();

  },
});
