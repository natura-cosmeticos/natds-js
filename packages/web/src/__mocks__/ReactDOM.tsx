// eslint-disable-next-line no-use-before-define
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MockReactDOM: any = jest.genMockFromModule("react-dom");

export const mockCreatePortal = jest.fn(
  (child, container) => (
    <div>
      <div id={"content"}>{child}</div>
      <div id={"target"} data-target-tag-name={container.tagName} />
    </div>
  ),
);

MockReactDOM.createPortal = mockCreatePortal;

export { MockReactDOM };

export default MockReactDOM;
