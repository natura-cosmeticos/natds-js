import * as ReactDOM from "react-dom";
import * as TestRenderer from "react-test-renderer";
import initStoryshots, { Stories2SnapsConverter } from "@storybook/addon-storyshots";
import * as React from "react";

jest.mock("react-dom");

const idsToIgnore = [
  // "components-chip--disabled",
];

/**
 * The following components can not be tested with Storyshots because they use React Portal
 *
 * ✕ Components/Drawer
 * ✕ Components/Drawer Body
 * ✕ Components/Menu
 * ✕ Components/Menu/Menu Item
 */
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

    const testRenderer = TestRenderer.create(storyElement);

    if (snapshotFilename && !idsToIgnore.includes(story.id)) {
      expect(testRenderer).toMatchSpecificSnapshot(snapshotFilename);
    } else {
      console.info(`${story.id} is being ignored because a snapshot filename could not be found or story was ignored`);
    }

    if (typeof done === "function") {
      done();
    }

    ReactDOM.createPortal.mockClear();

  },
});
