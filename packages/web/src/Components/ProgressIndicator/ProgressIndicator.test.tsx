import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { ProgressIndicator } from "./ProgressIndicator";

describe("ProgressIndicator components", () => {
  it("should match to snapshot - default props", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match to snapshot - with size 24", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator size={24} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match to snapshot - with layer", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator showLayer={true} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match to snapshot - with size 32", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator size={32} />);

    expect(testRenderer).toMatchSnapshot();
  });

  it("should match to snapshot - with size 64", () => {
    const testRenderer = TestRenderer.create(<ProgressIndicator size={64} />);

    expect(testRenderer).toMatchSnapshot();
  });
});
