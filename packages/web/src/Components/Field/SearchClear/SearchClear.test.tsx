import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import SearchClear from "./SearchClear";

describe("SearchClear component", () => {
  it("should match snapshot", () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
      <SearchClear onClearSearch={() => Function.prototype()} />,
    );

    expect(testRenderer).toMatchSnapshot();
  });
});
